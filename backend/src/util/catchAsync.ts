import { NextFunction, Request, Response } from 'express';

// create a function for catching async errors
const catchAsync = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch((error: any) => next(error));
    };
};

export default catchAsync;
