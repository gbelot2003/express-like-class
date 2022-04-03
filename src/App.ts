import * as express from "express";
import * as bodyParser from 'body-parser';

export class App {

    private _app: express.Application;
    private _port: number;

    constructor(controller: any, port: number) {
        this._app = express.default();
        this._port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controller);
    }

    private initializeMiddlewares() {
        this._app.use(bodyParser.json());
    }

    private initializeControllers(controller: any) {
        controller.forEach((controller: any) => {
            this._app.use('/', controller.router);
        });
    }

    public listen() {
        this._app.listen(this._port, () => {
            console.log(`App listening on the port ${this._port}`);
        });
    }
}