import React, { Component } from 'react';
import { connect } from 'react-redux';
import { companyNameChange, companyEmailChange, companyDescriptionChange } from '../../core/redux/actions/concertAction';

class InputCompany extends Component {
  render() { 
    const { companyName, companyEmail, companyDescription, companyNameChange, companyEmailChange, companyDescriptionChange } = this.props;
    return (
      <div className="InputCompany">
        <div className="MakeConcert__wrapper__title">
          Organization or Company info
        </div>
        <input type="text" className="MakeConcert__wrapper__input" value={companyName} onChange={(e) => companyNameChange(e.target.value)} placeholder="Name"/>
        <input type="text" className="MakeConcert__wrapper__input" value={companyEmail} onChange={(e) => companyEmailChange(e.target.value)} placeholder="email"/>
        <input type="text" className="MakeConcert__wrapper__input MakeConcert__wrapper__input--long" value={companyDescription} onChange={(e) => companyDescriptionChange(e.target.value)} placeholder="Description"/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  companyName: state.concertReducer.companyName,
  companyEmail: state.concertReducer.companyEmail,
  companyDescription: state.concertReducer.companyDescription
})

const mapDispatchToProps = dispatch => ({
  companyNameChange: name => dispatch(companyNameChange(name)),
  companyEmailChange: email => dispatch(companyEmailChange(email)),
  companyDescriptionChange: description => dispatch(companyDescriptionChange(description))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputCompany);