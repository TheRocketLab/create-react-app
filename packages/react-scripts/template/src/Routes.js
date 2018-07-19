import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import moment from 'moment';

import { withLayout } from './Layout';
import Login from './Pages/Login';
import Home from './Pages/Home';

const PrivateRoute = props => {
  const user = localStorage.getItem('user');

  return user ? (
    withLayout(<Route {...props} />)
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  );
};

class UTCUtils extends MomentUtils {
  format(value, formatString) {
    return moment(value)
      .utc()
      .format(formatString);
  }
}

export default class extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={UTCUtils} moment={moment} locale={'UTC'}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute component={() => <h1>Not Found</h1>} />
          </Switch>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    );
  }
}
