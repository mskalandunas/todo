import { Router } from 'express';

import { apiRouter } from './api/index.mjs';
import { templateRouter } from './templates/index.mjs';

const baseRouter = Router();

baseRouter
  .use('/', templateRouter)
  .use('/api', apiRouter);

export { baseRouter };