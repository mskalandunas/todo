// import fs from 'fs';
// import path from 'path';
// import ReactDOMServer from 'react-dom/server';
import { Router } from 'express';
import { ItemModel } from '../../models/item.mjs';

// import { Application } from '../../client/components/Application';

const templateRouter = Router();

const getController = (req, res) => {
  // const app = ReactDOMServer.renderToString(<Application />);
  // const indexFile = path.resolve('./dist/index.html');

  // fs.readFile(indexFile, 'utf8', (err, data) => {
  //   if (err) {
  //     console.error('[ERROR]:', err);
  //     return res.status(500).send('[500]: Server error.');
  //   }

  //   return res.send(
  //     data.replace('<div id="ReactRoot"></div>', `<div id="ReactRoot">${app}</div>`)
  //   );
  // });
  const item = new ItemModel({
    body: "Hello world",
    heading: "Yay!"
  });
  item.save(function (err, doc) {
    if (err) {
      console.error(err);
    }

    else {
      res.send(doc);
    }
  });
};

templateRouter.use('/', getController);

export { templateRouter };