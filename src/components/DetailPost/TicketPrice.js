import React from 'react';

import './TicketPrice.scss';

const TicketPrice = ({ticketLists}) => {
    const ticketsList = ticketLists.map(data => {

        return <div className="detail__concert__price__ticket" key={data.ticketName}>
            <div className="detail__concert__price__left">
                <span>{data.ticketName}</span>
                <span>KLY {data.ticketPrice}</span>
            </div>
            <span className={'detail__concert__price__right' + data.ticketAmount === 0 ? ' solded': ''}>{data.ticketAmount === 0 ? 'Sold out': data.ticketAmount + ' left'}</span>
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