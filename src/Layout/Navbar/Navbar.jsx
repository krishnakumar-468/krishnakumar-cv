import React from 'react';
import Button from '../../Components/Button/Button';
import './Navbar.css';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import Experience from '../../Pages/Experience/Experience';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import{
    BrowserRouter,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


function Navbar() {
    const [show, setShow] = React.useState();
    return (
        <BrowserRouter>
            <div className="navbar container">
                <div className="logo">
                    <Link  to="krishnakumar-cv/"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" /></Link>
                </div>
                <div className={show ? "show" : ""} >
                    <div  className="nave-link">
                        <div className="nave-link-menu">
                            
                                <ul>
                                    <li onClick={() => setShow(false)}><Link  to="krishnakumar-cv/">Home</Link></li>
                                    <li onClick={() => setShow(false)}><Link to="krishnakumar-cv/About">About me   </Link> </li>
                                    <li onClick={() => setShow(false)}><Link to="krishnakumar-cv/Portfolio"> Portfolio</Link> </li>
                                    {/* <li> Skills </li> */}
                                    <li onClick={() => setShow(false)}><Link to="krishnakumar-cv/Experience">Experience </Link></li>
                                </ul>
                                <span class="material-icons" onClick={() => setShow(false)}>close</span>
                        </div>
                        
                        <div>
                            <Button text="Download CV"></Button>
                        </div>

                        <div className="hamb-menu" onClick={() => setShow(true)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
                
            </div>
            <Routes>
                <Route exact path="krishnakumar-cv/" element={<Home />} /> 
                <Route path="krishnakumar-cv/About" element={<About />} /> 
                <Route path="krishnakumar-cv/Experience" element={<Experience />} />
                <Route path="krishnakumar-cv/Portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
    