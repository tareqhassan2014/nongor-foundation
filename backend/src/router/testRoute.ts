import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import { CustomResponse } from '../util/Response';
import { Password } from './../util/Password';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

// login a user
export const testRoute = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // check if email and password exists
    if (!email || !password) {
        throw new AppError('Please provide email and password', 400);
    }

    // check if user exists
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

    if (!user) {
        throw new AppError('Invalid credentials', 401);
    }

    // check if password is correct
    if (!Password.compare(user.password, password)) {
        throw new AppError('Invalid credentials', 401);
    }

    new CustomResponse(res, 200, 'Login successful').sendData('user', user);
});
