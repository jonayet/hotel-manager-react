import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

export function renderApp() {
  ReactDOM.render(
    <App />,
    document.getElementById('app'), // eslint-disable-line
  );
}

export default renderApp;
