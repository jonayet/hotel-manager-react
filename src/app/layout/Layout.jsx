import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = props => (
  <div>
    <div>
      <Header className="header" />
    </div>
    {props.children}
    <div className="footer" >
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};
