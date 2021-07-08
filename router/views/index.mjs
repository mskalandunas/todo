import { Router } from 'express';

import { baseViewController } from './views.mjs';

const viewRouter = Router();

viewRouter
  .get('/', baseViewController);

  export { viewRouter };