import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar container">
            <div className='logo'>
                Logo
            </div>
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
                    <button>Download CV</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;