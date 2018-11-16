import React, { Component } from 'react';
import UserInfo from './userInfo';
import CheckKlay from '../../components/Payment/checkKlay';
import AuthWallet from '../../components/Payment/AuthWallet';

class Payment extends Component {
  render() { 
    return (
      <UserInfo title='Payment'>
        <div className="Payment" style={{width:'100%', height: '800px', borderRadius:'19px', backgroundColor:'#FFF'}}>
          <CheckKlay />
          <AuthWallet />
        </div>
      </UserInfo>
    );
  }
}
 
export default Payment;