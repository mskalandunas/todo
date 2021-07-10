import { Router } from 'express';

import { apiRouter } from './api';
import { viewRouter } from './views';

export const baseRouter = Router().use('/', viewRouter).use('/api', apiRouter);
