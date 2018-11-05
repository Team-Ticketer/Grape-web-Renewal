import React, { Component, Fragment } from 'react';

import Concerts from "../components/Concerts/Concerts";

class ConcertsContainers extends Component {

    state = {
        concertsList: [
            {src: "/images/item-1.png", artist: "IU", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}, 
            {src: "/images/item-2.png", artist: "IMG 2", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-3.png", artist: "IMG3", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-1.png", artist: "IU", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}, 
            {src: "/images/item-2.png", artist: "IMG 2", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-3.png", artist: "IMG 3", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-1.png", artist: "IU", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}, 
            {src: "/images/item-2.png", artist: "IMG 2", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},{src: "/images/item-3.png", artist: "IMG 3", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}]
    }

    render() {
        return (
            <Fragment>
                <Concerts concertsList={this.state.concertsList}/> 
            </Fragment>
        );
    }
}

export default ConcertsContainers;