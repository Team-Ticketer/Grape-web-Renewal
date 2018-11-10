const Caver = require('caver-js')

/**
 * truffle network variables
 */
const FROM = '0x50e2CeB9B439b7CE7B346BE2Cae87a8B38B98e9B'
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
