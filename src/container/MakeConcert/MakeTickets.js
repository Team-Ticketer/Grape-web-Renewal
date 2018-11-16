import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputTicket from '../../components/MakeConcert/InputTicket';
import './css/MakeTickets.scss';

class MakeTickets extends Component {
  constructor(){
    super();
    this.state = {
      ticketName: [''],
      ticketPrice: [0],
      ticketAmount: [1],
      isTransferable: [true],
      isOpen: [true],
    };
    this.deleteTicket = this.deleteTicket.bind(this);
    this.inputAmount = this.inputAmount.bind(this);
    this.inputPrice = this.inputPrice.bind(this);
    this.inputName = this.inputName.bind(this);
    this.inputIsTransferable = this.inputIsTransferable.bind(this);
    this.inputIsOpen = this.inputIsOpen.bind(this);
  }
  deleteTicket(index) {
    let { ticketName, ticketPrice, ticketDescription, ticketAmount, isTransferable, isOpen } = this.state;
    if (ticketName.length === 1) {
      return;
    }
    ticketName.splice(index, 1);
    ticketPrice.splice(index, 1);
    ticketAmount.splice(index, 1);
    isTransferable.splice(index, 1);
    isOpen.splice(index, 1);
    this.setState({
      ticketName, ticketPrice, ticketAmount, isTransferable, isOpen
    })
  }
  inputName(index, value) {
    let { ticketName } = this.state;
    ticketName[index] = value;
    this.setState({
      ticketName,
    });
  }
  inputPrice(index, value) {
    let { ticketPrice } = this.state;
    if(value < 0) {
      return;
    }
    ticketPrice[index] = value;
    this.setState({
      ticketPrice,
    });
  }
  inputAmount(index, value) {
    let { ticketAmount } = this.state;
    if(value < 1) {
      return;
    }
    ticketAmount[index] = value;
    this.setState({
      ticketAmount,
    });
  }
  inputIsTransferable(index, value) {
    let { isTransferable } = this.state;
    isTransferable[index] = value;
    this.setState({
      isTransferable,
    });
  }
  inputIsOpen(index, value) {
    let { isOpen } = this.state;
    isOpen[index] = value;
    this.setState({
      isOpen,
    });
    if (isOpen.length === index+1 && !value) {
      let { ticketName, ticketPrice, ticketDescription, ticketAmount, isTransferable } = this.state;
      ticketName.push('');
      ticketPrice.push(10);
      ticketAmount.push(10);
      isTransferable.push(false);
      isOpen.push(true);
      this.setState({
        ticketName, ticketPrice, ticketAmount, isTransferable, isOpen
      })
    }
  }
  render() { 
    const { ticketName, ticketPrice, ticketAmount, isTransferable, isOpen } = this.state;
    return (
      <div className="MakeTickets">
        <div className="MakeConcert__title">
          Make Concert!
        </div>
        <div className="MakeTickets__wrapper">
          <div className="MakeTickets__wrapper__title">
            New Ticket
          </div>
          {this.renderTicket()}
        </div>
      </div>
    );
  }
  renderTicket() {
    const { ticketName, ticketPrice, ticketAmount, isTransferable, isOpen } = this.state;
    return ticketName.map((name, index) => {
      return <InputTicket key={index} index={index} name={name} price={ticketPrice[index]} amount={ticketAmount[index]} transferable={isTransferable[index]} isOpen={isOpen[index]}
      deleteTicket={this.deleteTicket} inputName={this.inputName} inputPrice={this.inputPrice} inputAmount={this.inputAmount} inputIsTransferable={this.inputIsTransferable} inputIsOpen={this.inputIsOpen}
      />
    })
  }
}
 
export default MakeTickets;