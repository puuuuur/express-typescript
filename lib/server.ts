'use-strict'

import app from './app';
import config from 'config';

let port: number = config.has('service.port') ? config.get('service.port') : 3000;

app.listen (port, () => {
    console.log(`Express server listening on port: ${port}`);
});