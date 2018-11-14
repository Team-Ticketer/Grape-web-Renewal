import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { videoChange, addressChange } from '../../core/redux/actions/concertAction';

class InputViedoLocation extends Component {
  render() { 
    const { address, video, videoChange, addressChange } = this.props;
    const opts = {
      width: '780',
      height: '488',
    };
    return (
      <React.Fragment>
        <div className="InputVideo">
          <div className="MakeConcert__wrapper__title"> 
            Introduce Video
          </div>
          youtube.com/watch?v=<input type="text" className="MakeConcert__wrapper__input" value={video} onChange={e => videoChange(e.target.value)}/>
          {video != ''? <YouTube videoId={video} opts={opts} onReady={e => e.target.pauseVideo()}/> : null}
        </div>
        <div className="InputLocation">
          <div className="MakeConcert__wrapper__title">
            Location
          </div>
          <input type="text" className="MakeConcert__wrapper__input MakeConcert__wrapper__input--long" value={address} onChange={e => addressChange(e.target.value)}/>
        </div>
      </React.Fragment>
    );
  }
}
 
const mapStateToProps = state => ({
  address: state.concertReducer.address,
  video: state.concertReducer.video
})

const mapDispatchToProps = dispatch => ({
  videoChange: (video) => dispatch(videoChange(video)),
  addressChange: (address) => dispatch(addressChange(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputViedoLocation);