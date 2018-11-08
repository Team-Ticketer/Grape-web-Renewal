import React from 'react';

import './SearchConcerts.scss';

const SearchConcerts = ({ title, artist, date, location, changeTitle, changeArtist, changeDate, changeLocation, handleSubmit }) => {
    return (
        <div className="search__wrapper">
            <div className="search__form">
            <input type="text" className="search__input" placeholder="Title" onChange={changeTitle} value={title}/>
            <div className="search__form__bottom">
                <input type="text" placeholder="Artist" className="search__input__bottom" onChange={changeArtist} value={artist}/>
                <input type="text" placeholder="Date" className="search__input__bottom" onChange={changeDate} value={date}/>
                <input type="text" placeholder="Location" className="search__input__bottom" onChange={changeLocation} value={location}/>
            </div>
            </div>
            <div className="search__btn__wrapper" onClick={handleSubmit}>
            <img src={`/images/search.png`} alt="search" className="search__btn" />
            </div>
        </div>
    );
};

export default SearchConcerts;