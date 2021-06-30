import { Router } from 'express';

import { apiRouter } from './api/index.mjs';

const baseRouter = Router();

baseRouter
  .use('/api', apiRouter);

export { baseRouter };