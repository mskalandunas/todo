import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './app';

ReactDOM.hydrate(<Application />, document.getElementById('ReactRoot'));
