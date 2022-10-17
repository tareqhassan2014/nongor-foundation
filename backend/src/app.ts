import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import { Server } from 'http';
import morgan from 'morgan';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';

class App {
    public express: Application;

    constructor(public port = 3000) {
        this.port = port;
        this.express = express();
        this.initializeMiddleWare();
        this.useRouter();
        this.express.all('*', notFound);
        this.express.use(globalErrorHandler);
    }

    private initializeMiddleWare(): void {
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(cookieParser());
        this.express.use(cors());
        this.express.use(express.urlencoded({ extended: false }));
    }

    // use router
    private async useRouter() {
        this.express.use('/api', require('./router').default);
        this.express.use('/media/image', express.static('upload'));
    }

    public listen(): Server {
        return this.express.listen(this.port, () =>
            console.log(`server is running http://localhost:${this.port}/`)
        );
    }
}

export default App;
