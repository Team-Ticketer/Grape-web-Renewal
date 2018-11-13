import React from 'react';
import { Link } from "react-router-dom";

import './ConcertsItem.scss'

const ConcertItem = ({data}) => {
    return (
        <div className="concerts__list__item">
            <img className="concerts__list__item__img" src={data.picture}/>
            <div className="concerts__list__item__content__wrapper">
                <div className="concerts__list__item__content__wrapper__inner">
                    <p className="concerts__list__item__content__title">{data.name}</p>
                    <div className="concerts__list__item__content__date__space">
                        <span>{data.startDate}</span>
                        <span>to</span>
                        <span>{data.endDate}</span>
                        {/* <span>At {data.}</span> */}
                    </div>
                    <p className="concerts__list__item__content__price">KLY {data.minPrice} ~ {data.maxPrice}</p>
                    <Link to={`/detail/${data._id}`} className="concerts__list__item__content__link">View more</Link>
                </div>
            </div>
        </div>
    );
};

export default ConcertItem;