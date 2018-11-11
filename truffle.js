const Caver = require('caver-js')

/**
 * truffle network variables
 */
const FROM = '0x3b3833646ffae1c7d5c319f0665fb34f3fcc46a2'
const HOST = '104.198.3.162'
const PORT = '8551'
const URL = `${HOST}:${PORT}`
const NETWORK_ID = '1000'
const GASLIMIT = 20000000

const caver = new Caver(new Caver.providers.HttpProvider(URL))

/**
 * network description
 * @param {string} from - wallet address for deploying
 */
module.exports = {
  networks: {
    klaytn: {
      host: HOST,
      port: PORT,
      network_id: NETWORK_ID,
      from: FROM,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
}
