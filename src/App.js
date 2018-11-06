import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import * as walletActions from 'actions/wallet';

import './App.scss'


class App extends Component {
  componentWillMount() {
    const { walletInstance, loadWallet } = this.props
    const walletFromSession = sessionStorage.getItem('walletInstance')

    if (walletFromSession) {
      loadWallet(JSON.parse(walletFromSession))
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadWallet: (walletInstance) => dispatch(walletActions.loadWallet(walletInstance)),
})

export default connect(
  null,
  mapDispatchToProps,
)(App)
