import React from 'react';
import MAppBar from '@material-ui/core/AppBar';
import MToolbar from '@material-ui/core/Toolbar';
import Button from 'components/atoms/Button';
import Typography from 'components/atoms/Typography';

const Navbar = () => {
  return (
    <div>
      <MAppBar position="left">
        <MToolbar>
          <Typography variant="h6">Aasdsa</Typography>
          <Button color="inherit">Adasdsa</Button>
        </MToolbar>
      </MAppBar>
    </div>
  );
};

export default Navbar;
