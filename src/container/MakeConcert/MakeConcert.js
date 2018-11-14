
import React, { Component } from 'react';
import InputCompany from '../../components/MakeConcert/InputCompany';
import InputConcertArtist from '../../components/MakeConcert/InputConcertArtist';
import InputConcertDate from '../../components/MakeConcert/InputConcertDate'
import InputViedoLocation from '../../components/MakeConcert/InputVideoLocation';
import InputImage from '../../components/MakeConcert/InputImage';
import InputInfo from '../../components/MakeConcert/InputInfo';
import { Link } from 'react-router-dom';
import './MakeConcert.scss';

class MakeConcert extends Component {
  render() { 
    return (
      <div className="MakeConcert">
        <div className="MakeConcert__title">
          Make Concert!
        </div>
        <div className="MakeConcert__wrapper">
          <div className="MakeConcert__wrapper__inputWrapper">
            <InputCompany/>
            <InputConcertArtist/>
            <InputConcertDate/>
            <InputViedoLocation/>
            <InputImage/>
            <InputInfo/>
          </div>
        </div>
        <Link to="/make/2">
          <button className="MakeConcert__btn">
            Next: ticket info
          </button>
        </Link>
      </div>
    );
  }
}
 
export default MakeConcert;