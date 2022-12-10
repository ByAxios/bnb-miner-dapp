


import { contractABI } from "../contracts/BNBminerABI";
import Web3 from "web3";



const web3 = new Web3(window.ethereum);

const contractAdress = "0xa49cbDFf6f99407FAAef47300229a05dB82873A7"
const minerContract = new web3.eth.Contract(contractABI, contractAdress);



/*
 * get busd Address
 */
export const getRate = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .getRate()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                   
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * Get Miner Amount
 */
export const minerAmount = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .getMyMiners()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                    
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get availableTokenForSale
 */
export const getAvailableTokenForSale1 = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .sale1AvailableAmount()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get availableTokenForSale
 */
export const getAvailableTokenForSale2 = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .sale2AvailableAmount()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};
/*
 * get hardcap
 */
export const getHardcap = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .hardcap()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get minPurchase
 */
export const getMinPurchase = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .minAmount()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get duration
 */
export const getDuration = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .duration()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get endTime
 */
export const getEndTime = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .endTime()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get totalRaised
 */
export const getTotalRaised = (myAddress) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .totalRaised()
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * get buyToken
 */
export const buyToken = (myAddress, amount) => {
    return new Promise((resolve, reject) => {
        if (web3 && web3.currentProvider) {
            minerContract.methods
                .buyTokens(myAddress, Web3.utils.toWei(amount, "ether"))
                .send({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};
