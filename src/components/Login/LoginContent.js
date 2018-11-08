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
    // 카카오 로그인에서 제공하는 기간으로 쿠키 지속시간 설정
    cookie.save('token', accessToken, { expires });
    /** axios로 username 받아오려고 하니까 options method로 한번 요청보내고 그 다음에 요청 보내다 보니까 method not allow 문제생김
     * 임시방변으로 Kakao API JS를 html로 불러와서 사용하는 방법을 사용함
     * 딱히 좋은방법은 아님.. 빠른시일내에 고쳐야지
     * @todo axios에서 options 메소드 안시키는 방법 찾기
    */
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