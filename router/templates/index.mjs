import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { Router } from 'express';

import { Application } from '../../client/components/Application';

const templateRouter = Router();

const getController = (req, res) => {
  const app = ReactDOMServer.renderToString(<Application />);
  const indexFile = path.resolve('./dist/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('[ERROR]:', err);
      return res.status(500).send('[500]: Server error.');
    }

    return res.send(
      data.replace('<div id="ReactRoot"></div>', `<div id="ReactRoot">${app}</div>`)
    );
  });
};

templateRouter.use('/', getController);

export { templateRouter };