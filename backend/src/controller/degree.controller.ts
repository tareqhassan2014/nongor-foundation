import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../util/catchAsync';
import sendResponse from '../util/sendResponse';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

// create a new degree
export const createDegree = catchAsync(async (req: Request, res: Response) => {
    const { degree, institute, passingYear, GPA } = req.body;
    const userId = req.user?.id;

    const data = {
        GPA,
        degree,
        userId,
        institute,
        passingYear: new Date(passingYear),
    };

    // first find if the degree already exists
    const degreeExists = await prisma.degree.findFirst({
        where: {
            degree,
            userId,
        },
    });

    if (degreeExists) {
        return sendResponse(400, 'Degree already exists', res);
    }

    const response = await prisma.degree.create({ data });

    // send response
    sendResponse(200, 'create a new degree', res, {
        name: 'degree',
        data: response,
    });
});

// update a degree
export const updateDegree = catchAsync(async (req: Request, res: Response) => {
    const { degree, institute, passingYear, GPA } = req.body;
    const userId = req.user?.id;
    const { id } = req.params;

    // first find if the degree already exists
    const degreeExists = await prisma.degree.findFirst({
        where: {
            degree,
            userId,
        },
    });

    if (!degreeExists) {
        return sendResponse(400, 'Degree no exists', res);
    }

    const data = {
        GPA,
        degree,
        institute,
        passingYear: new Date(passingYear),
    };

    const response = await prisma.degree.update({
        where: {
            id,
        },
        data,
    });

    // send response
    sendResponse(200, 'update a degree', res, {
        name: 'degree',
        data: response,
    });
});

// delete degree
export const deleteDegree = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    // first find if the degree already exists
    const degreeExists = await prisma.degree.findFirst({
        where: {
            id,
        },
    });

    if (!degreeExists) {
        return sendResponse(400, 'Degree no exists', res);
    }

    const response = await prisma.degree.delete({
        where: {
            id,
        },
    });

    // send response
    sendResponse(200, 'delete a degree', res);
});
