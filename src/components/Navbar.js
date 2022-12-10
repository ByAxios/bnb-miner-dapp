import ConnectWallet from './ConnectWallet';
import logo from '../assets/logo.png';

const Navbar = () => {
    return ( 
        <nav className="p-3 border-b-3 border-indigo-500">
            <div className="container flex justify-between">
            <img src={logo} className="h-10" alt=""/> 
            <div className="buttons">
               <ConnectWallet/>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;