import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from './dashboard/Dashboard';

export const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </main>
);
