import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import './UserModal.scss';

class UserModal extends Component {
  render() { 
    return (
      <div className="UserModal">
          <Link to="/payment">
            <div className="UserModal__Lists UserModal__Lists--left">
            - Payment
            </div>
          </Link>
        <Link to="/tickets">
          <div className="UserModal__Lists UserModal__Lists--left">
          - My Tickets
          </div>
        </Link>
        <Link to="/transfer/request">
          <div className="UserModal__Lists UserModal__Lists--left">
          - Transfer History
          </div>
        </Link>
        <div className="UserModal__Lists" onClick={this.logout.bind(this)}>
          LOG OUT
        </div>
      </div>
    );
  }
  logout() {
    localStorage.clear('name');
    cookie.remove('accessToken');
    window.location.reload();
  }
}
 
export default UserModal;