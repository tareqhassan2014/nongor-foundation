import { NextFunction, Request, Response } from 'express';
import multer from 'multer';

// create a global error handler
const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // log the error

    if (err?.meta?.target) {
        err.message = `Invalid ${err.meta.target} value`;
    }

    // check if the error is an instance of multer error
    if (err instanceof multer.MulterError) {
        err.message = 'File upload failed';
    }

    if (process.env.NODE_ENV === 'production') {
        return res.status(Number(err.status) || 500).json({
            status: err.status || 'error',
            message: err.message,
        });
    } else {
        return res.status(Number(err.status) || 500).json({
            status: err.status || 'error',
            message: err.message,
            stack: err.stack,
        });
    }
};

export default globalErrorHandler;
