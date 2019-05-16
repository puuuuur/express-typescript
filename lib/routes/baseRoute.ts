'use-strict'

import * as express from 'express';
import { Request, Response } from 'express';

export class BaseRoute {
    public routes(app: express.Application): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfull!!!!'
            })
        })
    }
}