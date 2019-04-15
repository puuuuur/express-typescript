import * as express from 'express';
import * as bodyParser from 'body-parser';
import { RouteController } from './routes/routeController';

class App {
    public app: express.Application;
    private routeController: RouteController = new RouteController();

    constructor() {
        this.app = express();
        this.config();
        this.routeController.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;