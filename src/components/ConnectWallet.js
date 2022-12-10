
import { BsLink45Deg } from 'react-icons/bs';
import Connect from '../contractMethods/Connect';


const ConnectWallet = () => {

    const { isConnected, connect, address } = Connect()


    const shortAdress = (addr) => {

        let first = addr.slice(0, address.length - 35);
        let second = addr.slice(address.length - 4, address.length)
        return first + "..." + second.toUpperCase()
    }


    return (
        <button onClick={connect} className="  flex items-center px-2 py-3 rounded-md text-white bg-gradient-to-l from-cyan-500 to-blue-500">
            <BsLink45Deg size={20} />
            {isConnected ? shortAdress(address) : "CONNECT WALLET"}
        </button>
    );
}

export default ConnectWallet;