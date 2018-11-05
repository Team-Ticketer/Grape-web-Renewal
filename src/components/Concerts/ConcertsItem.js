import React from 'react';
import { Link } from "react-router-dom";

import './ConcertsItem.scss'

const ConcertItem = ({data}) => {
    return (
        <div className="concerts--list--item">
            <img className="concerts--list--item--img" src={data.src}/>
            <div className="concerts--list--item--content--wrapper">
                <div className="concerts--list--item--content--wrapper--inner">
                    <p className="concerts--list--item--content--title">{data.artist}</p>
                    <div className="concerts--list--item--content--date--space">
                        <span>{data.startDay}</span>
                        <span>to</span>
                        <span>{data.endDay}</span>
                        <span>At {data.place}</span>
                    </div>
                    <p className="concerts--list--item--content--price">KLY {data.cheapestPrice} ~ {data.expensivePrice}</p>
                    <Link to="/detail/123" className="concerts--list--item--content--link">View more</Link>
                </div>
            </div>
        </div>
    );
};

export default ConcertItem;