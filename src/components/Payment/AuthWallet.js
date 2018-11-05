import React, { Component, Fragment } from 'react'
import connect from 'redux-connect-decorator';
import QRcode from 'qrcode-react';
import { cav } from 'klaytn/caver';
import './css/AuthWallet.scss';

import { integrateWallet, removeWallet } from './actions/wallet';

@connect((state) => ({
  walletInstance: state.wallet.walletInstance,
}), {
  integrateWallet,
  removeWallet,
})
class AuthWallet extends Component {
  state = {
    privateKey: '',
    password: '',
    keystoreMsg: '',
    keystore: '',
    qrcode: false,
    accessType: 'keystore', // || 'privateKey'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleImport = (e) => {
    const keystore = e.target.files[0]
    const fileName = keystore && keystore.name
    const fileReader = new FileReader()
    fileReader.onload = ({ target }) => {
      try {
        const parsedKeystore = JSON.parse(target.result)

        const isValidKeystore = parsedKeystore.version &&
          parsedKeystore.id &&
          parsedKeystore.address &&
          parsedKeystore.crypto

        if (!isValidKeystore) {
          this.setState({ keystoreMsg: '올바르지 않은 키스토어입니다.' })
          return
        }

        this.setState({
          keystoreMsg: 'right keystore file. please input password',
          fileName,
          keystore: target.result,
          keystoreAddress: parsedKeystore.address,
        }, () => document.querySelector('#input-password').focus())
      } catch (e) {
        this.setState({ keystoreMsg: 'wrong keystore file(JSON)' })
        return
      }
    }
    fileReader.readAsText(keystore)
  }

  handleLogin = () => {
    const { keystore, password, privateKey, accessType } = this.state
    const { integrateWallet } = this.props

    // Access type1: access through keystore + password
    if (accessType == 'keystore') {
      try {
        const { privateKey: privateKeyFromKeystore } = cav.klay.accounts.decrypt(keystore, password)
        integrateWallet(privateKeyFromKeystore)
        this.reset()
      } catch (e) {
        console.log(e)
        this.setState({ keystoreMsg: 'wrong password' })
      }
      return
    }

    // Access type2: access thorugh private key
    integrateWallet(privateKey)
    this.reset()
  }

  toggleAccessType = () => {
    const { accessType } = this.state
    this.setState({
      accessType: accessType === 'privateKey' ? 'keystore' : 'privateKey'
    }, this.reset)
  }

  renderAuth = () => {
    const { privateKey, keystoreMsg, accessType,qrcode } = this.state
    const { walletInstance, integrateWallet, removeWallet } = this.props
    if (walletInstance) {
      return (
        <Fragment>
          <label className="Auth__label">Wallet Address</label>
          <p className="Auth__address">{walletInstance.address}</p>
          <div className="Auth__qrcode">
            {qrcode ? <div onClick={()=>this.setState({qrcode:!qrcode})}><QRcode value={`${walletInstance.address}/${walletInstance.privateKey}`} /></div> : <span onClick={()=>this.setState({qrcode:!qrcode})}>View QRcode</span>}
          </div>
          <button className="Auth__logout" onClick={removeWallet}>Logout</button>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <div className="Auth__label">Keystore File</div>
        <div>
          {
            this.state.keystore === ''|| this.state.keystore.name === ''?
            <label className="Auth__keystoreInputLabel" htmlFor="keystoreInput">Click to upload Keystore</label> :
            <label className="Auth__keystoreInputLabel" htmlFor="keystoreInput">{this.state.fileName}</label>
          }
          <input id="keystoreInput" className="Auth__keystoreInput" type="file" onChange={this.handleImport} placeholder="Filename.json"/>
        </div>
        <div>
        <input id="input-password" className="Auth__passwordInput" name="password" type="password" placeholder="password" onChange={this.handleChange} />
        </div>
        <span className="Auth__keystoreMsg">{this.state.keystoreMsg}</span>
        <button className="Auth__logout" onClick={this.handleLogin}>Login</button>
        <p className="Auth__toggleAccessButton" onClick={this.toggleAccessType}>
        </p>
      </Fragment>
    )
  }

  reset = () => {
    this.setState({
      keystore: '',
      privateKey: '',
      password: '',
      keystoreMsg: ''
    })
  }

  render() {
    const { keystore } = this.state
    return (
      <div className="Auth">
        <div className="Auth__title">
          Manage Wallet
        </div>
        <div className="Auth__content">
          {this.renderAuth()}
        </div>
      </div>
    )
  }
}

export default AuthWallet;