import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Test } from '../../lib/components/Test';

const PATH_TO_INDEX = './dist/index.html';

export const viewController = (req, res) => {
  fs.readFile(path.resolve(PATH_TO_INDEX), 'utf8', (err, data) => {
    if (err) {
      console.error('[Error]: ', err);

      return res.status(500).send('Server Error');
    }

    fs.unlink(path.resolve(PATH_TO_INDEX), err => {
      if (err) {
        console.error('[Error]: ', err);

        return res.status(500).send('Server Error');
      }

      res.send(
        data.replace(
          '<div id="ReactRoot"></div>',
          '<div id="ReactRoot">' + ReactDOMServer.renderToString(<Test />) + '</div>'
        )
      );
    });
  });
};