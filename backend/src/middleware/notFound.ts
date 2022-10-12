import { NextFunction, Request, Response } from 'express';
import AppError from '../util/AppError';

export default (req: Request, res: Response, next: NextFunction) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
};
