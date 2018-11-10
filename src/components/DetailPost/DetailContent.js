import React from 'react';

import GoogleMap from './GoogleMap';
import TicketPrice from './TicketPrice';

import './DetailContent.scss';

const DetailContent = ({ concertTitle, description, lat, lng, youtubeUri, ticketLists }) => {

    return (
        <div className="detail__wrapper">
            
            <div className="detail__concert__wrapper">
                <div className="detail__concert__inner__wrapper">
                    <div className="detail__concert__text">
                        <h1>Welcome to {concertTitle} !</h1>
                        {description}
                    </div>
                    <div className="detail__concert__place">
                        <GoogleMap lat={lat} lng={lng}/>
                    </div>
                </div>
                <div className="detail__concert__inner__wrapper">
                    <iframe title="detail__concert__youtube" src={'https://www.youtube.com/embed/' + youtubeUri}  className="detail__concert__youtube" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <TicketPrice ticketLists={ticketLists}/>
                </div>
            </div>
        </div>
    );
}

export default DetailContent;