import './Home.css'
import Button from '../../Components/Button/Button';

function Home() {
    return (
        <div className="container home-container">
            <div className="home-text">
                <h1>Hy,  I AM <br /> <span>KRISHNAKUMAR</span> </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button text="Download CV"></Button>
            </div>
            <div className="home-banner">
                <img src={process.env.PUBLIC_URL + '/images/banner-image.jpg'} alt="banner" />
            </div>
        </div>
    );
}

export default Home;