import './Home.css'
import Button from '../../Components/Button/Button';

function Home() {
    return (
        <div className="container home-container">
            <div className="home-text">
                <h1>Hy,  I AM <br /> <span>KRISHNAKUMAR</span> </h1>
                <p>UI Developer with 4+ years experience, seeking to use proven skills in UI prototyping to enhance user experience, deployed new features with 10% higher performance than previous employment.</p>
                <Button text="Download CV"></Button>
            </div>
            <div className="home-banner">
                <img src={process.env.PUBLIC_URL + '/images/banner-image.jpg'} alt="banner" />
            </div>
        </div>
    );
}

export default Home;