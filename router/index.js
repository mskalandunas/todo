import { Router } from 'express';

import { apiRouter } from './api';
import { viewRouter } from './views';

const baseRouter = Router();

baseRouter
  .use('/', viewRouter)
  .use('/api', apiRouter);

export { baseRouter };
