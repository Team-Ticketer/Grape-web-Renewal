import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import BlockNumber from 'components/BlockNumber'
import Auth from 'components/Auth'

import * as walletActions from 'actions/wallet';
import MainContainer from './container/MainContainer';

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
        <BlockNumber />
        <MainContainer />
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
