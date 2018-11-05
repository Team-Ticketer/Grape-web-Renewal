import React, { Component } from 'react';
import './css/userInfo.scss';

class Mypage extends Component {
  render() { 
    return (
      <div className="userInfo">
        <div className="userInfo__contents">
          <div className="userInfo__title">{this.props.title}</div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
 
export default Mypage;