import React, { Component } from 'react';
import { connect } from 'react-redux';
import { infomationChange } from '../../core/redux/actions/concertAction';

class InputInfo extends Component {
  render() { 
    const { infomation, infomationChange } = this.props;
    return (
      <div className="InputInfo">
        <div className="MakeConcert__wrapper__title"> 
          Specific Info
        </div>
        <textarea className="MakeConcert__wrapper__textarea" placeholder="Write Here with MarkDown" value={infomation} onChange={e => infomationChange(e.target.value)}></textarea>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  infomation: state.concertReducer.infomation,
})

const mapDispatchToProps = dispatch => ({
  infomationChange: (info) => dispatch(infomationChange(info)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputInfo);