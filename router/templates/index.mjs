import { Router } from 'express';

import { landingTemplate } from './templates.mjs';

const templateRouter = Router();

const getController = (req, res) => {
  res.send(landingTemplate());
};

templateRouter.use('/', getController);

export { templateRouter };