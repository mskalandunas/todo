import express from 'express';

import { baseRouter } from './router/index.mjs';

const app = express();

app
  .use('/', baseRouter)
  .listen(3000, () => console.log('Server started'));
