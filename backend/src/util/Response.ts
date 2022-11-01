import { Response } from 'express';
import cookieOptions from './cookieOptions';
import { Token } from './jwt';
// make class CustomResponse  for sending response

export class CustomResponse {
    private readonly message: string;
    status: number;
    res: Response;
    constructor(res: Response, status: number, message: string) {
        this.message = message;
        this.status = status;
        this.res = res;
    }

    send() {
        return this.res.status(this.status).json({
            status: this.status,
            message: this.message,
        });
    }

    sendData(fieldName: string, data: any) {
        if (fieldName === 'user') {
            const token = Token.sign({ id: data.id });
            this.res.cookie('jwt', token, cookieOptions);

            data.token = token;
            data.password = undefined;
        }

        return this.res.status(this.status).json({
            message: this.message,
            [fieldName]: data,
        });
    }
}
