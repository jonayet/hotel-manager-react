import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from './dashboard/Dashboard';

function path(url) {
  return `${process.env.PUBLIC_URL || ''}${url}`;
}

export const Router = () => (
  <main>
    <Switch>
      <Route exact path={path('/')} component={Dashboard} />
    </Switch>
  </main>
);
