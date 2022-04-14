import Button from '../../Components/Button/Button';
import logo from "./../../Images/logo.png";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar container">
            <div className="logo">
                 <img src={logo} alt="logo" />
            </div>
            <div className='nave-link'>
                <div className="nave-link-menu">
                    <ul>

                        <li> Home </li>
                        <li> About me   </li>
                        <li> Portfolio </li>
                        <li> Skills </li>
                        <li> Reviews </li>

                    </ul>
                </div>
                <div>
                    <Button text="Download CV"></Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;