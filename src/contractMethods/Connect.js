import { useEffect, useState } from 'react';
import Web3 from "web3";

const Connect = () => {

    const [isConnected, setIsConnected] = useState(false)
    const [address, setAddress] = useState(null)

    useEffect(() => {
        connect()
    }, [])

    const connect = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log(accounts[0]);
            setAddress(accounts[0])
            window.web3 = new Web3(window.ethereum);
            setIsConnected(true)
        }
        else {
            console.log("not connected");

        }
    }

    window.ethereum.on('accountsChanged', function (accounts) {
        setIsConnected(false)
        connect()

    })

    return { isConnected, connect, address };
}

export default Connect;