import React from 'react';

import './TicketPrice.scss';

const TicketPrice = ({ticketLists}) => {
    const ticketsList = ticketLists.map(data => {

        return <div className={data.amount === 0 ?"detail__concert__price__ticket solded" : 'detail__concert__price__ticket'} key={data.name}>
            <div className="detail__concert__price__left">
                <span>{data.name}</span>
                <span>KLY {data.price}</span>
                <span>{data.transferable? 'Transferable': 'Not Transferable'}</span>
            </div>
            <span className='detail__concert__price__right'>{data.amount === 0 ? 'Sold out': data.amount + ' left'}</span>
        </div>
    })
    return (
        <div className="detail__concert__price__wrapper">
            <p className="detail__concert__price__title">Ticket Price</p>
            
            {ticketsList}
            <div className="detail__concert__transfer">
                <span>No tickets left?</span>
                <span>how about find a contract?</span>
            </div>
        </div>
    );
};

export default TicketPrice;