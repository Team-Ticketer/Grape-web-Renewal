import React from 'react';

import './DetailInfo.scss';

const DetailInfo = ({concertTitle, place, startDate, endDate, artist}) => {
    return (
        <div>
           <div className="detail__buy__top__bar display--none" id="detail__buy__top__bar">
                <div className="detail__buy__top__bar__inner">
                    <span className="detail__buy__top__bar__title">{concertTitle}</span>
                    <button className="detail__concert__buy__btn">Buy Ticket</button>
                </div>
            </div>
            <div className="detail__concert__title__wrapper">
                <div className="detail__concert__info__wrapper">
                    <span>
                    <span className="detail__concert__title">{concertTitle}</span></span>
                    <span className="detail__concert__place__date"><span>At {place}</span><br/><span>{new Date(startDate).toISOString().substring(0, 10)} - {new Date(endDate).toISOString().substring(0, 10)}</span></span>
                    <span><span className="detail__concert__artist">By {artist}</span></span>
                    <p><button className="detail__concert__buy__btn" id="detail__concert__buy__btn">Buy Ticket</button></p>
                </div>
            </div> 
        </div>
    );
};

export default DetailInfo;