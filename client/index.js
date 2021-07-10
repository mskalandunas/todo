import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './components/Application';
import { FIXTURES } from '../lib/__fixtures__/data';

ReactDOM.hydrate(
  <Application columns={FIXTURES.MOCK_DATA} />,
  document.getElementById('ReactRoot')
);
