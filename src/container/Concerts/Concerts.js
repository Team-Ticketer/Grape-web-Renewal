import React, { Component } from 'react';
import axios from 'axios';

import SearchComponent from 'components/Concerts/SearchConcerts';
import ConcertsList from 'components/Concerts/ConcertsList';

class Concerts extends Component {
    state = {
        concertsList: [],
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
        axios.get('http://grape-server.herokuapp.com/concert', dataForm)
        .then(res => {
            this.setState({
                concertsList: res.data
            })
        })
    }

    componentDidMount = () => {
        let searchData = localStorage.getItem("search_item")
        axios.get('http://grape-server.herokuapp.com/concert', searchData)
        .then(res => {
            // 이 부분 포스터 대체 부분이므로 지워도댐
            res.data[0].poster = '/images/item-1.png'
            this.setState({
                concertsList: res.data
            })
            localStorage.removeItem("search_item")
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