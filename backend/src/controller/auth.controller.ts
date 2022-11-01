import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import sendEmail from '../lib/sendEmail';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import { Password } from '../util/Password';
import { CustomResponse } from '../util/Response';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// register a new user
export const register = catchAsync(async (req: Request, res: Response) => {
    let { email, password, firstName, lastName, bloodGroup, lastDonation } =
        req.body;

    // check if email and password exists
    if (!email || !password)
        throw new AppError('Please provide email and password', 400);

    // check if user already exists
    const userExist = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (userExist) throw new AppError('User already exists', 400);

    //hash the password
    password = await bcrypt.hash(password, 12);

    // create a new user
    const user = await prisma.user.create({
        data: {
            email,
            lastName,
            password,
            firstName,
            bloodGroup,
            lastDonation: lastDonation ? new Date(lastDonation) : null,
        },
        select: {
            id: true,
            role: true,
            email: true,
            avatar: true,
            lastName: true,
            firstName: true,
        },
    });

    // send response
    new CustomResponse(res, 201, 'User created successfully').sendData(
        'user',
        user
    );
});

// login a user
export const login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // check if email and password exists
    if (!email || !password)
        throw new AppError('Please provide email and password', 400);

    // find the user
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            avatar: true,
            password: true,
        },
    });

    // check if user exists
    if (!user) throw new AppError('Invalid credentials', 401);

    // compare the password
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) throw new AppError('Invalid credentials', 401);

    // send response
    new CustomResponse(res, 200, 'Login successful').sendData('user', user);
});

// logout a user
export const logout = catchAsync(async (req: Request, res: Response) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    new CustomResponse(res, 200, 'Logout successful').send();
});

// forget password
export const forgetPassword = catchAsync(
    async (req: Request, res: Response) => {
        const { email } = req.body;

        // check if email exists
        if (!email) throw new AppError('Please provide email', 400);

        // check if user exists
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) throw new AppError('User not found', 404);

        // create a reset token
        let resetToken = crypto.randomBytes(32).toString('hex');

        // hash the token
        resetToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        //create reset password url
        const resetUrl = `${req.protocol}://${req.get(
            'host'
        )}/password/reset/${resetToken}`;

        const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetUrl}.\nIf you didn't forget your password, please ignore this email!`;

        try {
            await sendEmail({
                email: email,
                subject: 'Your password reset token (valid for 10 min)',
                message,
            });

            // set the reset token and expiry time
            const passwordResetExpires = Date.now() + 10 * 60 * 1000;

            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    passwordResetToken: resetToken,
                    passwordResetExpires: new Date(passwordResetExpires),
                },
            });

            return new CustomResponse(res, 200, 'Token sent to email').send();
        } catch (err) {
            // find the user and delete the reset token
            await prisma.user.update({
                where: {
                    email,
                },
                data: {
                    passwordResetToken: null,
                    passwordResetExpires: null,
                },
            });

            throw new AppError(
                'There was an error sending the email. Try again later!',
                500
            );
        }
    }
);

// reset password
export const resetPassword = catchAsync(async (req: Request, res: Response) => {
    const { password, passwordConfirm } = req.body;

    // check if password and passwordConfirm exists
    if (!password || !passwordConfirm)
        throw new AppError('Please provide password and passwordConfirm', 400);

    // find the user
    const user = await prisma.user.findFirst({
        where: {
            passwordResetToken: req.params.token,
            passwordResetExpires: {
                gte: new Date(),
            },
        },
    });

    if (!user) throw new AppError('Token is invalid or has expired', 400);

    // update the password
    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            password: await bcrypt.hash(password, 12),
            passwordResetToken: null,
            passwordResetExpires: null,
        },
    });

    new CustomResponse(res, 200, 'Password updated successfully').send();
});

// update password
export const updatePassword = catchAsync(
    async (req: Request, res: Response) => {
        const { currentPassword, password, passwordConfirm } = req.body;

        // check if currentPassword, password and passwordConfirm exists
        if (!currentPassword || !password || !passwordConfirm)
            throw new AppError(
                'Please provide currentPassword, password and passwordConfirm',
                400
            );

        // find the user
        const user = await prisma.user.findUnique({
            where: {
                id: req.user?.id,
            },
        });

        if (!user) throw new AppError('User not found', 404);

        // check if current password is correct
        if (!Password.compare(user.password, currentPassword))
            throw new AppError('Current password is incorrect', 401);

        // update the password
        const updatedUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: await bcrypt.hash(password, 12),
            },
        });

        new CustomResponse(res, 200, 'Password updated successfully').sendData(
            'user',
            updatedUser
        );
    }
);

// resend verification email
export const sendVerificationEmail = catchAsync(
    async (req: Request, res: Response) => {
        const { email } = req.body;

        // check if email exists
        if (!email) throw new AppError('Please provide email', 400);

        // find the user
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) throw new AppError('User not found', 404);

        // create a verification token
        let emailVerificationToken = crypto.randomBytes(32).toString('hex');

        // hash the token
        emailVerificationToken = crypto
            .createHash('sha256')
            .update(emailVerificationToken)
            .digest('hex');

        //create verification url
        const verificationUrl = `${req.protocol}://${req.get(
            'host'
        )}/email/verify/${emailVerificationToken}`;

        const message = `Please verify your email by clicking on the link: ${verificationUrl}.\nIf you didn't register, please ignore this email!`;

        try {
            await sendEmail({
                email: email,
                subject: 'Verify your email (valid for 10 min)',
                message,
            });

            // set the verification token and expiry time
            const emailVerificationExpires = Date.now() + 10 * 60 * 1000;

            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    emailVerificationToken,
                    emailVerificationExpires: new Date(
                        emailVerificationExpires
                    ),
                },
            });

            return new CustomResponse(
                res,
                200,
                'Verification email sent'
            ).send();
        } catch (err) {
            // find the user and delete the verification token
            await prisma.user.update({
                where: {
                    email,
                },
                data: {
                    emailVerificationToken: null,
                    emailVerificationExpires: null,
                },
            });

            throw new AppError(
                'There was an error sending the email. Try again later!',
                500
            );
        }
    }
);

// verify email
export const verifyEmail = catchAsync(async (req: Request, res: Response) => {
    const { token } = req.params;

    // find the user
    const user = await prisma.user.findFirst({
        where: {
            emailVerificationToken: token,
            emailVerificationExpires: {
                gte: new Date(),
            },
        },
    });

    if (!user) throw new AppError('Token is invalid or has expired', 400);

    // update the user
    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            emailVerificationToken: null,
            emailVerificationExpires: null,
            emailVerified: true,
        },
    });

    new CustomResponse(res, 200, 'Email verified successfully').send();
});

// google One Tap Login
export const googleOneTapLogin = catchAsync(
    async (req: Request, res: Response) => {
        const { idToken } = req.body;

        // check if idToken exists
        if (!idToken) throw new AppError('Please provide idToken', 400);

        // verify the idToken
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        if (!payload) throw new AppError('Google One Tap Login failed', 401);

        const email = payload.email as string;
        const avatar = payload.picture as string;
        const firstName = payload.given_name as string;
        const lastName = payload.family_name as string;

        // find the user
        const user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });

        // if user exists, send token
        if (user)
            return new CustomResponse(res, 200, 'Login successful').sendData(
                'user',
                user
            );

        // create a new user
        const newUser = await prisma.user.create({
            data: {
                email,
                avatar,
                firstName,
                lastName,
                emailVerified: true,
                password: await bcrypt.hash(
                    crypto.randomBytes(32).toString('hex'),
                    12
                ),
            },
        });

        new CustomResponse(res, 200, 'Login successful').sendData(
            'user',
            newUser
        );
    }
);
