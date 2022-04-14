import './Home.css'
import Button from '../../Components/Button/Button';
import homeBanner from "./../../Images/banner-image.jpg";

function Home() {
    return (
        <div className="container home-container">
            <div className="home-text">
                <h1>Hy,  I AM <br /> KRISHNAKUMAR</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button text="Download CV"></Button>
            </div>
            <div className="home-banner">
                <img src={homeBanner} alt="" />
            </div>
        </div>
    );
}

export default Home;