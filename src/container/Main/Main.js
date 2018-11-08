import React, { Component } from 'react';
import Discover from 'components/Main/Discover';
import Footer from 'components/Main/Footer';
import MainPage from 'components/Main/MainPage';

import axios from 'axios';

import './Main.scss';

class Main extends Component {

  state = {
    concertName: '',
    artistName: '',
    date: '',
    location: ''
  }

  changeConcertName = (e) => {
      this.setState({
          concertName: e.target.value,
      });
  }

  changeArtistName = (e) => {
      this.setState({
          artistName: e.target.value,
      });
  }

  changeDate = (e) => {
      this.setState({
          date: e.target.value,
      })
  }

  changeLocation = (e) => {
      this.setState({
          location: e.target.value,
      })
  }

  handleSearch = () => {
    // axios
  }


  render() { 
    return (
      <div className="Main">
        <MainPage changeConcertName={this.changeConcertName} changeArtistName={this.changeArtistName} changeDate={this.changeDate} changeLocation={this.changeLocation} state={this.state} onSearch={this.handleSearch}/>
        <Discover />
        <Footer />
      </div>
    );
  }
}
 
export default Main;