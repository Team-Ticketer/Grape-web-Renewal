import React, { Component } from 'react';
import './css/InputTicket.scss';

class InputTicket extends Component {
  render() {
    const { index, name, price, amount, transferable, isOpen, isTransferable,
      deleteTicket, inputName, inputPrice, inputDescription, inputAmount, inputIsTransferable, inputIsOpen } = this.props;
    return (
      <React.Fragment>
        { !isOpen ? 
          <div className="InputTicket InputTicket--close" onDoubleClick={()=>inputIsOpen(index, true)}>
            <span className="InputTicket--close__name">{name}</span>
            <span className="InputTicket--close__amount">{amount} tickets</span>
            <span className="InputTicket--close__price">{price}<span className="InputTicket--close__price__unit">KLY</span></span>
            <div className="InputTicket--close__isTransferable">{transferable ? 'Transferable' : 'Not Transferable'}</div>
          </div>
          :
          <div className="InputTicket InputTicket--open">
            <div className="InputTicket--open--name">
              <span className="InputTicket--open--name__title InputTicket--open__title">Ticket Name</span><input type="text" className="InputTicket--open--name__input InputTicket--open__input" value={name} onChange={e=>inputName(index, e.target.value)}/>
            </div>
            <div className="InputTicket--open--Amount">
              <span className="InputTicket--open--Amount__title InputTicket--open__title">Ticket amount</span><input type="number" className="InputTicket--open__input" value={amount} onChange={e=>inputAmount(index, e.target.value)}/>
            </div>
            <span className="InputTicket--open__Price InputTicket--open__title">Ticket Price</span><input type="number" className="InputTicket--open__input" value={price} onChange={e=>inputPrice(index, e.target.value)}/> KLY
            <span className="InputTicket--open__Transferable InputTicket--open__title">Transferable</span><input type="checkbox" checked={transferable} onChange={e=>inputIsTransferable(index, e.target.checked)}/>
            <button className="InputTicket--open__btn InputTicket--open__btn--close" onClick={()=>deleteTicket(index)}>Cancel</button><button className="InputTicket--open__btn" onClick={()=>inputIsOpen(index, false)}>Save</button>
          </div>
        }
      </React.Fragment>
    );
  }
}
 
export default InputTicket;