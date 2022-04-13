import Button from '../Button/Button';
import logo from "../../images/logo.png";
import './Navbar.css';

console.log(logo); // /logo.84287d09.png
function Navbar() {
    return (
        <div className="navbar container">
            <a  className="logo">
                 <img src={logo} alt="logo" />
            </a>
            <div className='nave-link'>
                <div>
                    <ul>
                        <li> Home </li>
                        <li> About me   </li>
                        <li> Portfolio </li>
                        <li> Skills </li>
                        <li> Reviews </li>
                    </ul>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;