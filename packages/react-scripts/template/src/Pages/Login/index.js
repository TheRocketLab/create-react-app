import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './Components/LoginForm';
import { LoginWrapper } from './style'

class Login extends Component {
  state = { user: { email: '', password: '' }, errorMessage: '', loading: false, errors: [] };

  handleChange = prop => event => this.setState({ ...this.state, user: { ...this.state.user, [prop]: event.target.value }});

  onError = e => this.setState({ errorMessage: e.message });

  handleLogin = () => {
    localStorage.setItem('user', JSON.stringify(this.state));
    this.props.history.push('/');
  };

  render() {
    const {loading, errors, user } = this.state
    return (
      <LoginWrapper>
        <LoginForm
          center
          imageHeaderUrl={
            'https://universal-coin-assets.s3-us-west-2.amazonaws.com/img/email_bg_3.png'
          }
          loading={loading}
          errors={errors}
          formData={user}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
        />
      </LoginWrapper>
    )
  }
}

export default withRouter(Login);
