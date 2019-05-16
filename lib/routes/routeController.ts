'use-strict'

import * as express from 'express';
import { BaseRoute } from './baseRoute';
import { PingRoute } from './pingRoute';

export class RouteController {
    private baseRoute: BaseRoute = new BaseRoute();
    private pingRoute: PingRoute = new PingRoute();


    public routes(app: express.Application) {
        this.baseRoute.routes(app);
        this.pingRoute.routes(app);
    }
}