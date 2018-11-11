import React from 'react';
import './MainPage.scss';

import { Link } from 'react-router-dom';

const MainPage = ({changeConcertName, changeArtistName, changeDate, changeLocation, state, onSearch}) => {
    let dt = new Date()
    return (
        <div className="main__wrapper">
            <img src={`/images/concert-idol.png`} style={{width:window.screen.width}} className="main__background__img"/>
            <span className="main__title">> Let's Pick <span className="main__title__underbar">Grape</span>!</span>
            <div className="main__ticket__wrapper">
                <div className="main__ticket__input">
                    <p className="main__ticket__title">TICKETER
                    <span className="main__ticket__date">{dt.getFullYear() + '-' + ((dt.getMonth() + 1 > 10) ? dt.getMonth() + 1: dt.getMonth() + 1) + '-' + ((dt.getDate() > 10) ? dt.getDate(): dt.getDate())}</span>
                    </p>
                    <div className="main__ticket__name__wrapper">
                        <div className="main__ticket__name__empty"></div>
                        <div className="main__ticket__name__form">
                            <input type="text" className="main__ticket__name__input" placeholder="Concert Name" value={state.concertName} onChange={changeConcertName}/>
                        </div>
                        <div className="main__ticket__name__empty"></div>
                    </div>
                    <div className="main__ticket__form__wrapper">
                        <div className="main__ticket__form__box">
                            <div className="main__ticket__form__box__inner">
                                <input type="text" className="main__ticket__form__input" placeholder="Artist Name" value={state.artistName} onChange={changeArtistName}/>
                            </div>
                        </div>
                        <div className="main__ticket__form__box">
                            <div className="main__ticket__form__box__inner">
                                <input type="date" className="main__ticket__form__input" placeholder="Date" value={state.date} onChange={changeDate}/>
                            </div>
                        </div>
                        <div className="main__ticket__form__box">
                            <div className="main__ticket__form__box__inner">
                                <input type="text" className="main__ticket__form__input" placeholder="location" value={state.location} onChange={changeLocation}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__ticket__submit">
                    <div className="main__ticket__submit__box">
                        <div className="main__ticket__submit__box__inner">
                            <div className="main__ticket__submit__empty"></div>
                            <Link to ="/concerts" className="main__ticket__submit__button" onClick={onSearch}>
                                <img src={`/images/search.png`} alt="search button" className="main__ticket__submit__button__img"/>
                            </Link>
                            <div className="main__ticket__submit__empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;