import React from 'react';
import { Link } from "react-router-dom";

import './ConcertsItem.scss'

const ConcertItem = ({data}) => {
    return (
        <div className="concerts__list__item">
            <img className="concerts__list__item__img" src={data.src}/>
            <div className="concerts__list__item__content__wrapper">
                <div className="concerts__list__item__content__wrapper__inner">
                    <p className="concerts__list__item__content__title">{data.artist}</p>
                    <div className="concerts__list__item__content__date__space">
                        <span>{data.startDay}</span>
                        <span>to</span>
                        <span>{data.endDay}</span>
                        <span>At {data.place}</span>
                    </div>
                    <p className="concerts__list__item__content__price">KLY {data.cheapestPrice} ~ {data.expensivePrice}</p>
                    <Link to="/detail/123" className="concerts__list__item__content__link">View more</Link>
                </div>
            </div>
        </div>
    );
};

export default ConcertItem;