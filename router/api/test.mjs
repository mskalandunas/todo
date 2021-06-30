import { Router } from 'express';

const testRouter = Router();

const getController = (req, res) => {
  res.json({
    status: 'SUCCESS!'
  });
};

testRouter.get('/', getController);

export { testRouter };