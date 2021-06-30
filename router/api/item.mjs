import { Router } from 'express';

const itemRouter = Router();

const createItem = (req, res) => {

};

const removeItem = (req, res) => {

};

const updateItem = (req, res) => {

};

itemRouter
  .delete('/', removeItem)
  .post('/', createItem)
  .put('/', updateItem);

export { itemRouter };