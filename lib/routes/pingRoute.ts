'use-strict'

import * as express from 'express';
import { Request, Response } from 'express';
import config from 'config';

export class PingRoute {
    public routes(app: express.Application): void {
        app.route('/ping')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                success: true,
                message: `Ping returned from ${this.getServiceName()}`
            })
        })
    }
    private getServiceName(): String {
        let serviceName: String = config.has('service.name') ? config.get('service.name') : 'default-service';
        return serviceName;
    }
}