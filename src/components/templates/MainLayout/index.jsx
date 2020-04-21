import React from 'react';
import './styles.js';
import { any } from 'prop-types';

const MainLayout = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default MainLayout;

MainLayout.propTypes = {
  children: any,
};
