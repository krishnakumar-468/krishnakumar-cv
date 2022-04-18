import Button from '../../Components/Button/Button';

function About() {
    return (
        <div className="container home-container">
            <div className="home-banner">
                <img src={process.env.PUBLIC_URL + '/images/banner-image.jpg'} alt="banner" />
            </div>
            <div className="home-text">
                <h3>About me</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly </p>
                <p>Believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t a</p>
                <Button text="Download CV"></Button>
            </div>
            
        </div>
    );
}

export default About;