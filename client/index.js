import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './components/Application';

ReactDOM.render(
  <Application
    columns={[
      {
        heading: 'Todo',
        items: [
          {
            body: "Make flashItem app",
            heading: "FlashItems",
            subtasks: {
              hasItems: true,
              items: ['Add CSS', 'Add JS']
            }
          },
          {
            body: "Make todo app",
            heading: "Todo",
            subtasks: {
              hasItems: false,
              items: []
            }
          },
        ]
      },
      {
        heading: 'In Progress',
        items: []
      },
      {
        heading: 'Done',
        items: [{
          body: "Create DS & Algo flashItems",
          heading: "Interviewing",
          subtasks: {
            hasItems: false,
            items: []
          }
        }]
      }
    ]}
  />,
  document.getElementById('ReactRoot')
);