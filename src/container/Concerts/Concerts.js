import React, { Component } from 'react';
import axios from 'axios';

import SearchComponent from 'components/Concerts/SearchConcerts';
import ConcertsList from 'components/Concerts/ConcertsList';

class Concerts extends Component {
    state = {
        concertsList: [
            {_id: '', picture: "/images/item-1.png", name: "IU", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20}, 
            {_id: '', picture: "/images/item-2.png", name: "IMG 2", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20},
            {_id: '', picture: "/images/item-3.png", name: "IMG3", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20},
            {_id: '', picture: "/images/item-1.png", name: "IU", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20}, 
            {_id: '', picture: "/images/item-2.png", name: "IMG 2", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20},
            {_id: '', picture: "/images/item-3.png", name: "IMG 3", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20},
            {_id: '', picture: "/images/item-1.png", name: "IU", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20}, 
            {_id: '', picture: "/images/item-2.png", name: "IMG 2", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20},
            {_id: '', picture: "/images/item-3.png", name: "IMG 3", startDate: '2019 09 12', endDate: '2019 09 14', place: 'Tokyo-3', minPrice: 15, maxPrice: 20}
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
        let dataForm = {}
        this.state.title !== '' ? dataForm['name'] = this.state.title:null;
        this.state.artist !== '' ? dataForm['artist'] = this.state.artist:null;
        this.state.date !== '' ? dataForm['date'] = this.state.date:null;
        this.state.location !== '' ? dataForm['address'] = this.state.location:null;
        console.log(dataForm);
        axios.get('http://grape-server.herokuapp.com/concert', dataForm)
        .then(res => {

        })
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