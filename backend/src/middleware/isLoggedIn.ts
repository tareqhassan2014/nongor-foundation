import jwt from 'jsonwebtoken';
// create a middleware for checking if the user is logged in or not

import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';

const prisma = new PrismaClient();

export const isLoggedIn = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        let token: string | undefined;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.cookies?.jwt) {
            token = req.cookies.jwt;
        }

        if (!token) {
            return next(
                new AppError(
                    'You are not logged in! Please log in to get access',
                    401
                )
            );
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        const currentUser = await prisma.user.findUnique({
            where: {
                id: (decoded as any).id,
            },
        });

        if (!currentUser) {
            return next(
                new AppError(
                    'The user belonging to this token does no longer exist.',
                    401
                )
            );
        }

        //@ts-ignore
        req.user = currentUser;

        next();
    }
);
