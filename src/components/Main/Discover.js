import React from 'react';
import './Discover.scss';

const Discover = () => {
    return (
        <div className="discover__wrapper">
            <div className="discover__empty">
                <div className="discover__empty__inner"></div>
            </div>
            <div className="discover__content__wrapper">
                <div className="discover__content__box">
                    <div className="discover__content__box__inner">
                        <span className="discover__content__title">Discover concerts</span>
                        <div className="discover__content__item__list">
                            <div className="discover__content__item__1"></div>
                            <div className="discover__content__item__2"></div>
                            <div className="discover__content__item__1"></div>
                            <div className="discover__content__item__1"></div>
                            <div className="discover__content__item__1"></div>
                            <div className="discover__content__item__2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discover__empty">
                <div className="discover__empty__inner"></div>
            </div>
        </div>
    );
};

export default Discover;