import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import catchAsync from '../util/catchAsync';
import sendResponse from '../util/sendResponse';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
});

// create new contact
export const createContact = catchAsync(async (req: Request, res: Response) => {
    const {
        email,
        phone,
        whatsapp,
        imo,
        facebook,
        twitter,
        instagram,
        linkedin,
        skype,
        website,
        page,
        github,
    } = req.body;

    const userId = req.user?.id;

    // first find if the contact already exists
    const contactExists = await prisma.contact.findFirst({
        where: {
            userId,
        },
    });

    if (contactExists) return sendResponse(400, 'contact already exists', res);

    const data = {
        email,
        phone,
        whatsapp,
        imo,
        facebook,
        twitter,
        instagram,
        linkedin,
        skype,
        website,
        page,
        github,
        userId,
    };

    const response = await prisma.contact.create({ data });

    // send response
    sendResponse(200, 'create new contact', res, {
        name: 'contact',
        data: response,
    });
});

// update contact
export const updateContact = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const {
        email,
        phone,
        whatsapp,
        imo,
        facebook,
        twitter,
        instagram,
        linkedin,
        skype,
        website,
        page,
        github,
    } = req.body;

    // first find if the contact already exists
    const contactExists = await prisma.contact.findFirst({ where: { id } });

    if (!contactExists) return sendResponse(400, 'contact does not exist', res);

    const data = {
        email,
        phone,
        whatsapp,
        imo,
        facebook,
        twitter,
        instagram,
        linkedin,
        skype,
        website,
        page,
        github,
    };

    const response = await prisma.contact.update({ where: { id }, data });

    // send response
    sendResponse(200, 'update contact', res, {
        name: 'contact',
        data: response,
    });
});

// delete contact
export const deleteContact = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;

    // first find if the contact already exists
    const contactExists = await prisma.contact.findFirst({ where: { id } });

    if (!contactExists) return sendResponse(400, 'contact does not exist', res);

    await prisma.contact.delete({ where: { id } });

    // send response
    sendResponse(200, 'delete contact', res);
});
