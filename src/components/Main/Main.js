import React from 'react';
import './Main.scss';

import { Link } from 'react-router-dom';

const Main = ({changeConcertName, changeArtistName, changeDate, changeLocation, state, onSearch}) => {
    let dt = new Date()
    return (
        <div className="main--wrapper">
            <img src={`/images/concert-idol.png`} alt="" className="main--background-img"/>
            <span className="main--title">> Let's Pick <span className="main--title--underbar">Grape</span>!</span>
            <div className="main--ticket--wrapper">
                <div className="main--ticket--input">
                    <p className="main--ticket--title">TICKETER
                    <span className="main--ticket--date">{dt.getFullYear() + '-' + ((dt.getMonth() + 1 > 10) ? dt.getMonth() + 1: dt.getMonth() + 1) + '-' + ((dt.getDate() > 10) ? dt.getDate(): dt.getDate())}</span>
                    </p>
                    <div className="main--ticket--name--wrapper">
                        <div className="main--ticket--name--empty"></div>
                        <div className="main--ticket--name--form">
                            <input type="text" className="main--ticket--name--input" id="main--ticket--name--input" placeholder="Concert Name" value={state.concertName} onChange={changeConcertName}/>
                        </div>
                        <div className="main--ticket--name--empty"></div>
                    </div>
                    <div className="main--ticket--form--wrapper">
                        <div className="main--ticket--form--box">
                            <div className="main--ticket--form--box--inner">
                                <input type="text" className="main--ticket--form--input" placeholder="Artist Name" value={state.artistName} onChange={changeArtistName}/>
                            </div>
                        </div>
                        <div className="main--ticket--form--box">
                            <div className="main--ticket--form--box--inner">
                                <input type="date" className="main--ticket--form--input" placeholder="Date" value={state.date} onChange={changeDate}/>
                            </div>
                        </div>
                        <div className="main--ticket--form--box">
                            <div className="main--ticket--form--box--inner">
                                <input type="text" className="main--ticket--form--input" placeholder="location" value={state.location} onChange={changeLocation}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main--ticket--submit">
                    <div className="main--ticket--submit--box">
                        <div className="main--ticket--submit--box--inner">
                            <div className="main--ticket--submit--empty"></div>
                            <Link to ="/concerts" className="main--ticket--submit--button" onClick={onSearch}>
                                <img src={`/images/search.png`} alt="search button" className="main--ticket--submit--button--img"/>
                            </Link>
                            <div className="main--ticket--submit--empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;