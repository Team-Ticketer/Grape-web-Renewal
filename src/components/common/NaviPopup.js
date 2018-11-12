import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import './css/NaviPopup.scss';

class NaviPopup extends Component {
  constructor() {
    super();
    this.state = {
      menus: [
        {
          msg: '- Payment Info',
          to: '/mypage',
          isFun: false,
        },
        {
          msg: '- My Tickets',
          to: '/ticket',
          isFun: false,
        },
        {
          msg: '- Transfer History',
          to: '/transfer-history',
          isFun: false,
        },
        {
          msg: 'LOG OUT',
          isFun: true,
          fun: this.logout,
        },
      ]
    }
    this.logout = this.logout.bind(this);
  }
  logout() {
    localStorage.removeItem('name');
    cookie.remove('token');
    window.location.reload()
  }
  render() { 
    return (
      <div className="NaviPopup">
        {this.renderList()}
      </div>
    );
  }
  renderList() {
    const { menus } = this.state;
    return menus.map((menu, index) => {
      if (!menu.isFun) {
        return (
          <Link to={menu.to} key={index}>
            <div className="NaviPopup__menu">
              {menu.msg}
            </div>
          </Link>
        )
      } else {
        return (
          <div className="NaviPopup__menu" onClick={this.logout}>
            {menu.msg}
          </div>
        )
      }
    })
  }
}
 
export default NaviPopup;