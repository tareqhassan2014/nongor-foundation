// send response to client

import { Response } from 'express';

export default function sendResponse(
    statusCode: number,
    message: string,
    res: Response,
    data?: any
) {
    if (data) {
        res.status(statusCode).json({
            status: statusCode,
            message,
            [data['name']]: data.data,
        });
    } else {
        res.status(statusCode).json({
            status: statusCode,
            message,
        });
    }
}
