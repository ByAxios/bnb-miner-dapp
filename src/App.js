


import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import { minerAmount } from './contractMethods/methods'
import Web3 from "web3";
import Connect from './contractMethods/Connect';
import { useEffect, useState } from 'react';

function App() {

  
const [contractBalance,setContractBalance] = useState("-")
const [minerAmounts,setMinerAmounts] = useState("-")

const { isConnected, address } = Connect()

  useEffect(() => {
    const web3 = new Web3(window.ethereum);
     web3.eth.getBalance("0xce93F9827813761665CE348e33768Cb1875a9704").then(el => setContractBalance((el/1000000000000000000).toFixed(3)))
    
  }, [])


  useEffect(() => {
    if (isConnected) {
      console.log("RUNNING");
        const myMiners = async () => {
            const data = await minerAmount(
                address,
            );
            setMinerAmounts(data);
        };
        myMiners()
    }
}, [isConnected,address]);

 

  return (
    <>
      <div className="navLayout bg-slate-900">
        <Navbar />
      </div>
      <div className="container flex justify-center p-2 ">
        <div className="card w-96 mt-6 rounded-md text-white p-4 bg-gradient-to-l from-cyan-500 to-blue-500 ">
          <h1 className="text-gray-200 text-lg">
            You have
          </h1>
          <h1 className="text-white text-xl">
            {isConnected ? `${minerAmounts} Miners` : "- Miners"}
          </h1>

          <h1 className="text-white text-xl">
            {isConnected ? "0.0 BNB" : "- BNB"}
          </h1>
          <h1 className="text-white text-xl mt-2">
            Contract
          </h1>
          <h1 className="text-white text-2xl">
            {contractBalance  }
          </h1>
        </div>
      </div>

      <section className="container flex justify-center p-2 ">
        <div className="block">
          <div className="mb-1 text-lg font-medium dark:text-white">BNB In Barrel:</div>
          <div className="mb-4 h-6 w-96 bg-gray-200 rounded-md dark:bg-gray-500 flex items-center justify-center">
            <p> 0 (? till full) </p>
          </div>
        </div>
      </section>

      <section className=" container  w-96  bg-gray-800 p-4 rounded-md">

        <div className=" flex justify-center">
          <h1 className="text-white">
            MinersYour TVL = - BNB
          </h1>
          <div className="hireMiners block">
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <Button text="HIRE MINERS" isDisabled={!isConnected} />
          <p className="text-gray-400"> with </p>
          <input className="w-16 bg-gray-500 rounded-md focus:outline-none pl-2 p-2" type="number" placeholder="0" />
        </div>

        <div className="actions block mt-4 ">
          <Button customClass="w-full mt-4" text="Compound" isDisabled={!isConnected} />
          <Button customClass="w-full mt-4" text="Pocket Your BNB" isDisabled={!isConnected} />

        </div>
      </section>

      <section className=" container  w-96  rounded-md">
        <Button customClass="bg-gradient-to-l from-cyan-500 to-blue-500  w-full mt-4 p-5 text-xl" text="GET STARTED" isDisabled={false} />
        <Button customClass="bg-gradient-to-l from-cyan-500 to-blue-500 w-full mt-4 p-5 text-xl" text="MEMBERS VIDEO" isDisabled={false} />
        
      </section>

    </>

  );
}

export default App;
