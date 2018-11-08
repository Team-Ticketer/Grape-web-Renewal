import React from 'react';

import ConcertsItem from './ConcertsItem';

import './ConcertsList.scss';

const ConcertsList = ({concertsList}) => {
    const concertsArray = concertsList.map(
        data => <ConcertsItem data={data}/>
    )
    return (
        <div>
            <div className="concerts__list__wrapper">
                <span className="concerts__list__title">
                    Concerts Lists (999+)
                </span>
                <div className="concerts__list__items__wrapper">
                    {concertsArray}
                </div>
            </div>
        </div>
    );
};

export default ConcertsList;