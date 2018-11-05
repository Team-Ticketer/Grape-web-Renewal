import React from 'react';

const SearchConcert = () => {
    return (
        <div className="search--wrapper">
          <div className="search--form">
            <input type="text" className="search--input" placeholder="Title"/>
            <div className="search--form--bottom">
              <input type="text" placeholder="Artist" className="search--input--bottom" />
              <input type="text" placeholder="Date" className="search--input--bottom"/>
              <input type="text" placeholder="Location" className="search--input--bottom"/>
            </div>
          </div>
          <div className="search--btn--wrapper">
            <img src={`/images/search.png`} alt="search" className="search--btn" />
          </div>
        </div>
    );
};

export default SearchConcert;