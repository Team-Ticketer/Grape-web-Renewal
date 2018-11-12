import cav from '../klaytn/caver';
import grapeABI from './deployedABI.json';
import contractAddress from './contractAddress';

const grapeContract = new cav.klay.Contract(grapeABI, contractAddress);

export const 
