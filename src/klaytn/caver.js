import web3 from 'web3'

export const config = {
  rpcURL: 'ws://localhost:8552'
}

export const cav = new web3(config.rpcURL)

export default cav
