import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { connect } from 'react-redux';
import { concertStartDateChange, concertEndDateChange, ticketingStartDateChange } from '../../core/redux/actions/concertAction';

class InputConcertDate extends Component {
  render() { 
    const { concertStartDate, concertEndDate, ticketingStartDate, concertStartDateChange, concertEndDateChange, ticketingStartDateChange } = this.props;
    return (
      <React.Fragment>
        <div className="MakeConcert__wrapper__title">
          Concert Date
        </div>
        <div className="MakeConcert__wrapper__Date">
          <span className="MakeConcert__wrapper__Date__title">Start</span>
          <DateTimePicker
            onChange={concertStartDateChange}
            value={new Date(concertStartDate)}
            disableClock={false}
            minDate={new Date()}
          />
        </div>
        <div className="MakeConcert__wrapper__Date">
          <span className="MakeConcert__wrapper__Date__title">End</span>
          <DateTimePicker
            onChange={concertEndDateChange}
            value={new Date(concertEndDate)}
            isClockOpen={false}
            minDate={new Date(concertStartDate)}
          />
        </div>
        <div className="MakeConcert__wrapper__title">
          Ticketing Date
        </div>
        <div className="MakeConcert__wrapper__Date">
          <DateTimePicker
            onChange={ticketingStartDateChange}
            value={new Date(ticketingStartDate)}
            isClockOpen={false}
            minDate={new Date()}
          />
          <button className="MakeConcert__wrapper__btn" onClick={() => ticketingStartDateChange(new Date())}>Start Now!</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  concertStartDate: state.concertReducer.concertStartDate,
  concertEndDate: state.concertReducer.concertEndDate,
  ticketingStartDate: state.concertReducer.ticketingStartDate
})

const mapDispatchToProps = dispatch => ({
  concertStartDateChange: (date) => dispatch(concertStartDateChange(new Date(date).getTime())),
  concertEndDateChange: (date) => dispatch(concertEndDateChange(new Date(date).getTime())),
  ticketingStartDateChange: (date) => dispatch(ticketingStartDateChange(new Date(date).getTime()))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputConcertDate);