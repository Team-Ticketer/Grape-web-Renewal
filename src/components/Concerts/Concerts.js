import React from 'react'
import ConcertsItem from './ConcertsItem';
import SearchConcert from './SearchConcert';

import './Concerts.css'

const Concerts = ({concertsList}) => {
  const concertsArray = concertsList.map(data => 
    <ConcertsItem data={data}/>)
  return (
    <div className="concerts--wrapper">
      <SearchConcert />
      <div className="concerts--list--wrapper">
        <span className="concerts--list--title">
          Concerts Lists (999+)
        </span>
        <div className="concerts--list--items--wrapper">
          {concertsArray}
        </div>
      </div>
    </div>
  );
};

export default Concerts