// create a new controller

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../util/catchAsync';
import sendResponse from '../util/sendResponse';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

// create a new address
export const createAddress = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const {
        city,
        state,
        country,
        type,
        village,
        union,
        tana,
        upazila,
        district,
        division,
    } = req.body;

    // first find if the address already exists
    const addressExists = await prisma.address.findFirst({
        where: {
            type,
            userId,
        },
    });

    if (addressExists) {
        return sendResponse(400, type + ' address already exists', res);
    }

    const data = {
        city,
        state,
        country,
        type,
        village,
        union,
        tana,
        upazila,
        district,
        division,
        userId,
    };

    const response = await prisma.address.create({ data });

    // send response
    sendResponse(200, 'create a new address', res, {
        name: 'address',
        data: response,
    });
});

// update an address
export const updateAddress = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
        city,
        state,
        country,
        zip,
        village,
        union,
        tana,
        upazila,
        district,
        division,
    } = req.body;

    // first find if the address already exists
    const addressExists = await prisma.address.findFirst({ where: { id } });
    if (!addressExists) return sendResponse(400, 'address not found', res);

    const data = {
        city,
        state,
        country,
        zip,
        village,
        union,
        tana,
        upazila,
        district,
        division,
    };

    const response = await prisma.address.update({
        where: {
            id,
        },
        data,
    });

    // send response
    sendResponse(200, 'update an address', res, {
        name: 'address',
        data: response,
    });
});

// delete an address
export const deleteAddress = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    // first find if the address already exists
    const addressExists = await prisma.address.findFirst({ where: { id } });

    if (!addressExists) return sendResponse(400, 'address not found', res);

    await prisma.address.delete({ where: { id } });

    // send response
    sendResponse(200, 'delete an address', res);
});
