import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { store } from './store';
import { App } from './App';

export function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={createStore(store)}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('app'), // eslint-disable-line
  );
}

export default renderApp;
