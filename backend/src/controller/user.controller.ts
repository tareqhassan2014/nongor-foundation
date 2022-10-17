import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../util/catchAsync';
import sendResponse from '../util/sendResponse';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

// get me
export const getMe = catchAsync(async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user?.id,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            bloodGroup: true,
            email: true,
            role: true,
            avatar: true,
            lastDonation: true,
            address: true,
            degree: true,
            contact: true,
        },
    });

    // send response
    // send response
    sendResponse(200, 'populate with user', res, {
        name: 'user',
        data: user,
    });
});

// update me
export const updateMe = catchAsync(async (req: Request, res: Response) => {
    const {
        firstName,
        lastName,
        bloodGroup,
        lastDonation,
        avatar: photo,
    } = req.body;
    const avatar = req.file?.filename;

    if (avatar) {
        const options = {
            where: {
                id: req.user?.id,
            },
            data: {
                firstName,
                lastName,
                bloodGroup,
                avatar,
                photos: {
                    create: {
                        url: avatar,
                        public_id: avatar,
                    },
                },
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                bloodGroup: true,
                email: true,
                role: true,
                avatar: true,
                photos: true,
            },
        };

        // update user
        const user = await prisma.user.update(options);

        // send response
        sendResponse(200, 'user update successfully!!', res, {
            name: 'user',
            data: user,
        });
    } else {
        const options = {
            where: {
                id: req.user?.id,
            },
            data: {
                firstName,
                lastName,
                bloodGroup,
                lastDonation: new Date(lastDonation),
                avatar: photo,
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                bloodGroup: true,
                email: true,
                role: true,
                avatar: true,
                photos: true,
            },
        };

        // update user
        const user = await prisma.user.update(options);

        // send response
        sendResponse(200, 'user update successfully!!', res, {
            name: 'user',
            data: user,
        });
    }
});
