import React, { Component } from 'react';
import cookie from 'react-cookies';
import _ from 'underscore';
import { browserHistory } from 'react-router';
import LoginContent from 'components/Login/LoginContent';
import './Login.scss';

class Login extends Component {
  componentDidMount() {
    const token = cookie.load('token');
    if (!_.isUndefined(token)) {
      browserHistory.goBack();
    }
  }
  render() { 
    return (
      <div className="Login" style={{width:window.screen.width}}>
        <LoginContent/>
      </div>
    );
  }
}
 
export default Login;