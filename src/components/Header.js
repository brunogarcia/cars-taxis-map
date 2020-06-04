import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header() {
  return (
    <div>
      <AppBar position="static" color="default" className="Header-main">
        <Toolbar>
          <Typography variant="subheading">
            A project made by <a href="https://garciaechegaray.com">Bruno Garcia</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
