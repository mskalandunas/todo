import { Router } from 'express';

import { FIXTURES } from '@fixtures';

const itemRouter = Router();

const createItem = (req, res) => {};

const getItems = (req, res) => {
  res.send(FIXTURES.COLUMNS);
};

const removeItem = (req, res) => {};

const updateItem = (req, res) => {};

itemRouter
  .delete('/', removeItem)
  .get('/', getItems)
  .post('/', createItem)
  .put('/', updateItem);

export { itemRouter };
