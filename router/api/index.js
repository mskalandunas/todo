import { Router } from 'express';

import { itemRouter } from './item';

export const apiRouter = Router()
  .use('/item', itemRouter);
