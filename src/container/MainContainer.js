import React, { Component } from 'react';
import Main from '../components/Main/Main';
import Discover from '../components/Main/Discover';
import Footer from '../components/Main/Footer';

import './TotalContainer.scss';

class MainContainer extends Component {

    state = {
        concertName: '',
        artistName: '',
        date: '',
        location: ''
    }

    changeConcertName = (e) => {
        this.setState({
            concertName: e.target.value
        });
    }

    changeArtistName = (e) => {
        this.setState({
            artistName: e.target.value
        });
    }

    changeDate = (e) => {
        console.log(e.target.value);
        this.setState({
            date: e.target.value
        });
    }

    changeLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleSearch = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="main--container">
                <Main changeConcertName={this.changeConcertName} changeArtistName={this.changeArtistName} changeDate={this.changeDate} changeLocation={this.changeLocation} state={this.state} onSearch={this.handleSearch}/>
                <Discover />
                <Footer />
            </div>
        );
    }
}

export default MainContainer;