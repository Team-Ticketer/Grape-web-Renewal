import Caver from 'caver-js'

export const config = {
  rpcURL: 'http://ec2-13-125-213-220.ap-northeast-2.compute.amazonaws.com:8551'
}

export const cav = new Caver(config.rpcURL)

export default cav
