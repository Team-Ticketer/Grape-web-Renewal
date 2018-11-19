import React, { Component, Fragment } from 'react';
import connect from 'redux-connect-decorator';
import { Router } from 'react-router';
import './css/PayComponent.scss';
import {sendCreateconcert} from '../../core/Grape';
import cav from '../../klaytn/caver';
import withLoding from './withLoding';
import axios from 'axios';

@withLoding
@connect((state) => ({
  walletInstance: state.wallet.walletInstance,
  companyName:  state.concertReducer.companyName,
  companyEmail:  state.concertReducer.companyEmail,
  companyDescription:  state.concertReducer.companyDescription,
  concertName:  state.concertReducer.concertName,
  artistName:  state.concertReducer.artistName,
  concertStartDate:  state.concertReducer.concertStartDate,
  concertEndDate:  state.concertReducer.concertEndDate,
  ticketingStartDate: state.concertReducer.ticketingStartDate,
  video: state.concertReducer.video,
  address: state.concertReducer.address,
  headerImage: state.concertReducer.headerImage,
  posterImage: state.concertReducer.posterImage,
  infomation: state.concertReducer.infomation,
}))
class PayComponent extends Component{
  constructor() {
    super();
    this.state = {
      klay: 0,
      gas: (cav.utils.fromWei('25000000000', 'ether'))*1,
      status: false,
      result: null,
    }
  }
  getKlay = async () => {
    let klay = await cav.eth.getBalance(this.props.walletInstance.address);
    klay = cav.utils.fromWei(klay, 'ether');
    this.setState({klay});
  }
  pay = async () => {
    this.props.changeLodingState();
    const {
      companyName,
      companyEmail,
      companyDescription,
      concertName,
      artistName,
      concertStartDate,
      concertEndDate,
      ticketingStartDate,
      video,
      address,
      headerImage,
      posterImage,
      infomation,
      ticketName,
      ticketPrice,
      ticketAmount,
      isTransferable} = this.props;
    sendCreateconcert(this.props.walletInstance.address, ticketingStartDate.toString(), concertStartDate.toString(), ticketName.length.toString(), ticketName, ticketPrice, ticketAmount, isTransferable).then(res => {
      const { transactionHash } = res;
      console.log(transactionHash);
      // axios.post('/concert', {
      //   contract: transactionHash,
      //   name: concertName,
      //   artist: artistName,
      //   content: infomation,
      //   video: video,
      //   address,
      //   startDate: concertStartDate,
      //   endDate: concertEndDate,
      //   ownerName: companyName,
      //   ownerEmail: companyEmail,
      //   ownerDes: companyDescription
      // }).then(res => {
      //   if(res.status === 201) {
        this.props.changeLodingState();
        window.location.href = '/';
      //   }
      // })
    }).catch(err => {
      console.log(err);
      alert('오류가 발생하였습니다. 지갑에 Klay가 있는지 확인해주세요.');
    })
  }
  componentDidMount(){
    this.getKlay();
  }
  render() {
    const { klay, gas } = this.state;
    const { transferFee } = this.props;
    const result = (klay - gas).toFixed(9);
    return (
      <Fragment>
        <div className="PayComponent" onClick={() => this.props.close()}>
        </div>
        <div className="PayComponent__modal">
            <div className="PayComponent__modal__title">Request transfer</div>
            <div className="PayComponent__modal__Record">
              <div>
                <span className="PayComponent__modal__Record__title">Your balance</span><span className="PayComponent__modal__Record__value"><span className="PayComponent__modal__Record__value__klay">{klay}</span>KLY</span>
              </div>
              <div>
                <span className="PayComponent__modal__Record__title">- Transfer fee</span><span className="PayComponent__modal__Record__value"><span className="PayComponent__modal__Record__value__klay">{gas.toFixed(9)}</span>KLY</span>
              </div>
            </div>
            <div className="PayComponent__modal__Balance">Your Expected Balance <span className="PayComponent__modal__Balance__value"><span className="PayComponent__modal__Balance__value__klay">{result}</span>KLY</span></div>
            <div className="PayComponent__modal__btn" onClick={()=>this.pay()}>Pay to finish</div>
          </div>
    </Fragment>
    )
  }
}
 
export default PayComponent;