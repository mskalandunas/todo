import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from '@components/Application';
import { FIXTURES } from '@fixtures';

ReactDOM.hydrate(
  <Application columns={FIXTURES.COLUMNS} />,
  document.getElementById('ReactRoot')
);
