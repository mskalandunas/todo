import { Router } from 'express';

import { itemRouter } from './item.mjs';
import { testRouter } from './test.mjs';

const apiRouter = Router();

apiRouter
  .use('/', testRouter)
  .use('/item', itemRouter);

export { apiRouter };