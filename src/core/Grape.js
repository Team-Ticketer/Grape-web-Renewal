import cav from '../klaytn/caver';
import grapeABI from './deployedABI.json';

const grapeContract = new cav.eth.Contract(grapeABI, '0xcadcccef6aa57f4aaf6b2cadcb31e0d10efae411');

export const sendCreateconcert = (address, _saleStartTime, _saleEndTime, _ticketTypeCounts, _ticketName, _ticketPrice, _ticketAmount, _isTransferable) => {
  return new Promise((resolve, reject) => {
    grapeContract.methods.createConcert(_saleStartTime, _saleEndTime, _ticketTypeCounts, _ticketName, _ticketPrice, _ticketAmount, _isTransferable).send(
      {
      from:address, 
      gas: 2500000, 
      gasPrice: 25000000000
      }
    ).on("error", function(error) {
        console.log("error", error);
        reject(error);
    }).then(function(result){
        resolve(result);
    });
  });
}  

export const sendPayticket = (address, _concertId, _ticketType) =>{
  return new Promise((resolve, reject) => {
    grapeContract.methods.payTicket(_concertId, _ticketType).send(
      {
      from:address, 
      gas: 10000000000, 
      gasPrice: 100000000
      }
    ).on("error", function(error) {
        console.log("error", error);
        reject(error);
    }).on("transactionHash", function(transactionHash) {
        console.log("transactionHash", transactionHash);
    }).on("receipt", function(receipt) {
        console.log("receipt", receipt);
        console.log("contractAddress", receipt.contractAddress); 
    }).on("confirmation", function(confirmationNumber, receipt) {
        console.log("confirmationNumber", confirmationNumber); 
    }).then(function(result){
        console.log('payTicket', result);
        resolve(result);
    });
  });
}
export const callViewconcert =  (concertId) => {
  return new Promise((resolve, reject) => {
    grapeContract.methods.viewConcert(concertId).call().then(result => {
          console.log(result);
          resolve(result);
      });
  });
}

export const callViewconcerttickettype =  (concertId, ticketType) => {
  return new Promise((resolve, reject) => {
    grapeContract.methods.viewConcertTicketType(concertId, ticketType).call().then(result => {
      console.log(result);
      resolve(result);
    });
  });
}

export const callViewmyticket =  (concertId) => {
  return new Promise((resolve, reject) => {
    grapeContract.methods.viewMyTicket(concertId).call().then(result => {
      console.log(result);
      resolve(result);
    });
  });
}