import React, { Component } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import './css/Navigation.scss';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      name: '',
    };
  }
  componentDidMount() {
    if (cookie.load('token') !== '') {
      const foo = async function () {
        const token = await cookie.load('token');
        this.setState({
          token
        });
        axios({
          method: 'post',
          url: 'https://kapi.kakao.com/v2/user/me',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
        }).then((res) => {
          this.setState({name: res.data.properties.nickname});
        })
      }
      foo();
    }
  }
  render() {
    const { token, name } = this.state;
    return (
      <div className="Navigation" style={{width: window.screen.width}}>
        <div className="Navigation__wrapper">
          <div className="Navigation__wrapper__title">
            GRAPE
          </div>
          {token === '' ? 
            <div className="Navigation__wrapper__btn Navigation__wrapper__btn--false">
              Login
            </div> :
            <div className="Navigation__wrapper__btn Navigation__wrapper__btn--true">
              ▼ {name}
            </div>
          }
        </div>
      </div>
    );
  }
}
 
export default Navigation;