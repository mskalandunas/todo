import { Router } from 'express';

import { itemRouter } from './item';

const apiRouter = Router();

apiRouter.use('/item', itemRouter);

export { apiRouter };
