import React from 'react';
import { Link } from "react-router-dom";

import './ConcertsItem.scss'

const ConcertItem = ({data}) => {
    // console.log(data)
    return (
        <div className="concerts__list__item">
            <img className="concerts__list__item__img" src={data.poster}/>
            <div className="concerts__list__item__content__wrapper">
                <div className="concerts__list__item__content__wrapper__inner">
                    <p className="concerts__list__item__content__title">{data.name}</p>
                    <div className="concerts__list__item__content__date__space">
                        <span>{new Date(data.startDate).toISOString().substring(0,10)}</span>
                        <span>to</span>
                        <span>{new Date(data.endDate).toISOString().substring(0,10)}</span>
                    </div>
                    <p className="concerts__list__item__content__price">KLY {data.minPrice} ~ {data.maxPrice}</p>
                    <Link to={`/concert/${data._id}`} className="concerts__list__item__content__link">View more</Link>
                </div>
            </div>
        </div>
    );
};

export default ConcertItem;