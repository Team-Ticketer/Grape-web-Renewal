import React, { Component } from 'react';
import cav from 'klaytn/caver';
import { connect } from 'react-redux';
import './css/checkKlay.scss';

class checkKlay extends Component {
  state = { 
    klay: 0,
    errmsg: '아직 지갑 연동이 되지 않은 상태입니다.'
  }
  getKlay = async () => {
    if (this.props.walletInstance !== '') {
      const address = this.props.walletInstance.address;
      let klay = await cav.eth.getBalance(address);
      klay = cav.utils.fromWei(klay, 'ether');
      this.setState({klay, errmsg: ''});
    } else {
      this.setState({klay, errmsg: '아직 지갑 연동이 되지 않은 상태입니다.'});
    }
  }
  componentDidMount() {
    this.getKlay()
  }
  render() { 
    return (
      <div className="checkKlay">
        <div className="checkKlay__title">Your Balance</div>
        <div className="checkKlay__valueBox">
          <img src={'/images/klaytn.png'} onClick={this.getKlay} className="checkKlay__valueBox__img"/>
          <div className="checkKlay__valueBox__value">{this.state.klay} <span style={{color:'#3d3d3d'}}> Klay</span></div> 
          <span className="checkKlay__valueBox__error">{this.state.errmsg}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walletInstance: state.wallet.walletInstance,
  }
}

export default connect(mapStateToProps, null)(checkKlay);