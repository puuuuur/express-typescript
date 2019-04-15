import * as express from 'express';
import { BaseRoute } from './baseRoute';

export class RouteController {
    private baseRoute: BaseRoute = new BaseRoute();

    public routes(app: express.Application) {
        this.baseRoute.routes(app);
    }
}