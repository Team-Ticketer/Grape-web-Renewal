const Caver = require('caver-js')

/**
 * truffle network variables
 */
const FROM = ''
const HOST = 'http://ec2-13-125-213-220.ap-northeast-2.compute.amazonaws.com'
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
