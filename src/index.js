import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import YouTubeWindow from './containers/YouTubeWindow.js';
import store from './redux/store.js';

import './style/index.css';

ReactDOM.render(
  <Provider store={store}>
    <YouTubeWindow />
  </Provider>,
  document.getElementById('root')
);
