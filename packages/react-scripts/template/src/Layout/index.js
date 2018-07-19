import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  AppBar,
  Toolbar,
  MenuItem,
  Hidden,
  Typography,
  IconButton,
  Drawer,
  CssBaseline,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

import { DrawerWrapper, DrawerMenuList, LogoutItem } from './style';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Layout extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleLogout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login');
  };

  render() {
    const {
      classes,
      children,
      location: { pathname },
    } = this.props;

    const drawer = (
      <DrawerWrapper>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <DrawerMenuList>
          <MenuItem component={Link} to="/" selected={'/' === pathname}>
            Home
          </MenuItem>

          <LogoutItem onClick={this.handleLogout}>Logout</LogoutItem>
        </DrawerMenuList>
      </DrawerWrapper>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <Menu />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

const StyedLayout = compose(
  withRouter,
  withStyles(styles)
)(Layout);

const withLayout = component => <StyedLayout>{component}</StyedLayout>;

export default StyedLayout;
export { withLayout };
