import React, { Component } from 'react';
import axios from 'axios';

import SearchComponent from 'components/Concerts/SearchConcerts';
import ConcertsList from 'components/Concerts/ConcertsList';

class Concerts extends Component {
    state = {
        concertsList: [
            {src: "/images/item-1.png", artist: "IU", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}, 
            {src: "/images/item-2.png", artist: "IMG 2", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-3.png", artist: "IMG3", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-1.png", artist: "IU", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}, 
            {src: "/images/item-2.png", artist: "IMG 2", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-3.png", artist: "IMG 3", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},
            {src: "/images/item-1.png", artist: "IU", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}, 
            {src: "/images/item-2.png", artist: "IMG 2", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20},{src: "/images/item-3.png", artist: "IMG 3", startDay: '2019 09 12', endDay: '2019 09 14', place: 'Tokyo-3', cheapestPrice: 15, expensivePrice: 20}
        ],

        title: '',
        artist: '',
        date: '',
        location: ''
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeArtist = (e) => {
        this.setState({
            artist: e.target.value
        })
    }

    changeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    changeLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleSubmit = () => {
        // axios
    }

    render() {
        return (
            <div className="concerts__wrapper">
                <SearchComponent 
                    title={this.state.title}
                    artist={this.state.artist}
                    date={this.state.date}
                    location={this.state.location}
                    changeTitle={this.changeTitle} 
                    changeArtist={this.changeArtist}
                    changeDate={this.changeDate}
                    changeLocation={this.changeLocation}
                    handleSubmit={this.handleSubmit}    
                />
                <ConcertsList concertsList={this.state.concertsList}/>
            </div>
        );
    }
}

export default Concerts;