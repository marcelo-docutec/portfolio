import React from 'react';
import { Button } from '@material-ui/core';

const MButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default MButton;
