import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Application } from '../../client/components/Application';
import { FIXTURES } from '../../lib/__fixtures__/data';

const PATH_TO_INDEX = './templates/index.html';

export const viewController = (req, res) => {
  fs.readFile(path.resolve(PATH_TO_INDEX), 'utf8', (err, data) => {
    if (err) {
      console.error('[Error]: ', err);

      return res.status(500).send('Server Error');
    }

    res.send(
      data.replace(
        '<div id="ReactRoot"></div>',
        '<div id="ReactRoot">' + ReactDOMServer.renderToString(<Application columns={FIXTURES.MOCK_DATA} />) + '</div>'
      )
    );
  });
};