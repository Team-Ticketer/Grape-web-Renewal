import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies'
import axios from 'axios';
import _ from 'lodash';
import './css/Navigation.scss';
import NaviPopup from './NaviPopup';

class Navigation extends Component {
  state = {
    name: '',
    token: '',
    isPopup: false,
  };
  componentDidMount() {
    if (!_.isUndefined(cookie.load('token'))) {
      const cookieToken = cookie.load('token');
      this.setState({
        token: cookieToken
      });
      this.setState({name: localStorage.getItem('name')})
    } else {
      localStorage.removeItem('name');
    }
  }
  render() {
    const { token, name, isPopup } = this.state;
    return (
      <div className="Navigation" style={{width: window.screen.width}}>
        <div className="Navigation__wrapper">
          <Link to="/">
            <div className="Navigation__wrapper__title">
              GRAPE
            </div>
          </Link>
          {token === '' ? 
            <div className="Navigation__wrapper__btn Navigation__wrapper__btn--false">
              <Link to='/login'>Login</Link>
            </div>: 
            <div className="Navigation__wrapper__btn Navigation__wrapper__btn--true" >
              <div onClick={() => this.setState((prevstate) => ({isPopup: !prevstate.isPopup}))}>
                ▼ {name}
              </div>
              {isPopup ? <NaviPopup/> : null}
            </div>
          }
        </div>
      </div>
    );
  }
}
 
export default Navigation;