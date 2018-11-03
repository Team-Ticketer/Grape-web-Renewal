import React, { Component } from 'react';

import './Payment.scss';

class Payment extends Component {
    state = {
        myBalance: 100,
        transferFee: 30,
    }
    render() {
        return (
            <div className="payment--wrapper">
                { this.props.rout === 'Propose'? <p className="make--upper--title">Make Concert!</p>: '' }
                <div className="payment--wrapper--inner">
                    <p className="payment--title">Payment</p>
                    <div className="payment--execute--wrapper">
                        <p className="payment--execute--row">
                            <span className="payment--execute--row--left">Your myBalance</span>
                            <span className="payment--execute--row--right"><span className="payment--execute--row--klay">{this.state.myBalance}</span>KLY</span>
                        </p>
                        <p className="payment--execute--row">
                            <span className="payment--execute--row--left">- transfer fee</span>
                            <span className="payment--execute--row--right"><span className="payment--execute--row--klay">{this.state.transferFee}</span>KLY</span>
                        </p>
                    </div>
                    <div className="payment--executed--wrapper">
                        <span className="payment--executed--left">
                            Your balance
                        </span>
                        <span className="payment--executed--right"><span className="payment--executed--klay">{this.state.myBalance - this.state.transferFee}</span>KLY</span>
                    </div>
                </div>
                
                <input type="button" onClick={() => this.props.sendTranstion()} value="Pay to finish" className="payment--submit"/>
            </div>
        );
    }
}

export default Payment;