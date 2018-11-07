import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import cookie from 'react-cookies';
import './css/LoginContent.scss';
import {JSkey} from '../../core/APIkey';

class LoginContent extends Component {
  render() { 
    return (
      <div className="LoginContent">
        <div className="LoginContent__wrapper">
          Log In
          <KakaoLogin jsKey={JSkey} onSuccess={this.success} render={(props) => 
          <div className="LoginContent__wrapper__btn" onClick={() => props.onClick()}>
            Login with kakao ID
          </div>
          }/>
        </div>
      </div>
    );
  }
  success(response) {
    const accessToken = response.response.access_token;
    const expires = new Date();
    expires.setDate(Date.now() + response.response.expires_in);
    cookie.save('token', accessToken, { expires });
    // Kakao.API.request({
    //     url: '/v2/user/me',
    //     success: (result) => {
    //         localStorage.setItem('name', result.properties.nickname)
    //         return location.href = '/payment'
    //     }
    // });
  }
  failure(error) {
      console.log(error);
  }
}
 
export default LoginContent;