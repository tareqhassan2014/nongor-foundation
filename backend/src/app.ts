import express, { Application } from 'express';
import { Server } from 'http';
import morgan from 'morgan';

class App {
    public express: Application;

    constructor(public port = 3000) {
        this.port = port;
        this.express = express();
        this.initializeMiddleWare();
    }

    private initializeMiddleWare(): void {
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    public listen(): Server {
        return this.express.listen(this.port, () =>
            console.log(`server is running http://localhost:${this.port}/`)
        );
    }
}

export default App;
