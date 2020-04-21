import React from 'react';
import MTypography from '@material-ui/core/Typography';

const Typography = ({ children, ...props }) => {
  return <MTypography {...props}>{children}</MTypography>;
};

export default Typography;
