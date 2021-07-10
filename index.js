import express from 'express';

import { baseRouter } from './router';

const app = express();

// app.use(express.static('./dist'));

app.use('/', baseRouter).listen(3000, () => console.log('Server started'));
