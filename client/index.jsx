import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from '../lib/components/Application';
import { FIXTURES } from '../lib/__fixtures__';

ReactDOM.hydrate(
  <Application columns={FIXTURES.COLUMNS} />,
  document.getElementById('ReactRoot')
);
