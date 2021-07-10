import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Application } from '@components/Application';
import { FIXTURES } from '@fixtures';

const PATH_TO_INDEX = 'server/templates/index.html';

export const viewController = (req, res) => {
  fs.readFile(path.resolve(PATH_TO_INDEX), 'utf8', (err, data) => {
    if (err) {
      console.error('[Error]: ', err);

      return res.status(500).send('Server Error');
    }

    res.send(
      data.replace(
        '<div id="ReactRoot"></div>',
        '<div id="ReactRoot">' +
          ReactDOMServer.renderToString(
            <Application columns={FIXTURES.COLUMNS} />
          ) +
          '</div>'
      )
    );
  });
};
