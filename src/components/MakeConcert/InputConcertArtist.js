import React, { Component } from 'react';
import { connect } from 'react-redux';
import { concertNameChange, artistNameChange } from '../../core/redux/actions/concertAction';

class InputConcertArtist extends Component {
  render() { 
    const { concertName, artistName, concertNameChange, artistNameChange } = this.props
    return (
      <React.Fragment>
        <div className="MakeConcert__wrapper__title">
          Concert Name
        </div>
        <input type="text" placeholder="Name" className="MakeConcert__wrapper__input MakeConcert__wrapper__input--long" value={concertName} onChange={(e) => concertNameChange(e.target.value)}/>
        <div className="MakeConcert__wrapper__title">
          Artist Name
        </div>
        <input type="text" placeholder="Name" className="MakeConcert__wrapper__input MakeConcert__wrapper__input--long" value={artistName} onChange={(e) => artistNameChange(e.target.value)}/>
      </React.Fragment>
    );
  }
}
 
const mapStateToProps = state => ({
  concertName: state.concertReducer.concertName,
  artistName: state.concertReducer.artistName
});

const mapDispatchToProps = dispatch => ({
  concertNameChange: concertName => dispatch(concertNameChange(concertName)),
  artistNameChange: artistName => dispatch(artistNameChange(artistName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputConcertArtist);