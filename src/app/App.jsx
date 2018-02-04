import React from 'react';

import { Layout } from './layout';
import { Router } from './Router';

export const App = () => (
  <div>
    <Layout>
      <Router />
    </Layout>
  </div>
);
