import React, { Component } from 'react';
import Discover from 'components/Main/Discover';
import Footer from 'components/Main/Footer';
import MainPage from 'components/Main/MainPage';

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
    const { history } = this.props;
    history.push({
        pathname: '/concerts',
        state:{
            name: this.state.concertName,
            artist: this.state.artistName,
            date: this.state.date,
            address: this.state.location
        }
    })
  }


  render() { 
    return (
      <div className="Main" style={{width: window.screen.width}}>
        <MainPage changeConcertName={this.changeConcertName} changeArtistName={this.changeArtistName} changeDate={this.changeDate} changeLocation={this.changeLocation} state={this.state} onSearch={this.handleSearch}/>
        <Discover />
        <Footer />
      </div>
    );
  }
}
 
export default Main;