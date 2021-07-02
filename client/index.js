import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './components/Application';

ReactDOM.render(
  <Application
    columns={[
      {
        heading: 'Column 1',
        items: [{
          body: "Card body",
          heading: "Card Heading",
          subtasks: {
            meta: {
              count: 0
            }
          }
        }]
      }
    ]}
  />,
  document.getElementById('ReactRoot')
);