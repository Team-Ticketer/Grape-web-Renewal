import React, { Component } from 'react';
import cookie from 'react-cookies';
import _ from 'underscore';
import { browserHistory } from 'react-router';
import './Login.scss';
import LoginContent from 'components/Login/LoginContent';

class Login extends Component {
  componentDidMount() {
    const token = cookie.load('token');
    if (!_.isUndefined(token)) {
      browserHistory.goBack();
    }
  }
  render() { 
    return (
      <div className="Login" style={{}}>
        <LoginContent />
      </div>
    );
  }
}
 
export default Login;