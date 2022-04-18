import Button from '../../Components/Button/Button';
import './Navbar.css';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import{
    BrowserRouter,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


function Navbar() {
    return (
        <BrowserRouter>
            <div className="navbar container">
                <div className="logo">
                    <Link  to="krishnakumar-cv/"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" /></Link>
                </div>
                <div className='nave-link'>
                    <div className="nave-link-menu">
                        
                            <ul>
                                <li><Link  to="krishnakumar-cv/">Home</Link></li>
                                <li><Link to="krishnakumar-cv/About">About me   </Link> </li>
                                <li> Portfolio </li>
                                <li> Skills </li>
                                <li> Reviews </li>
                            </ul>
                    </div>
                    
                    <div>
                        <Button text="Download CV"></Button>
                    </div>

                    <div className="hamb-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
            <Routes>
                <Route exact path="krishnakumar-cv/" element={<Home />} /> 
                <Route path="krishnakumar-cv/About" element={<About />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
    