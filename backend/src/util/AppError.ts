// create a error class
class AppError extends Error {
    public status: string;
    public isOperational: boolean;
    constructor(message: string, status: number) {
        super(message);
        this.status = status.toString();
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
