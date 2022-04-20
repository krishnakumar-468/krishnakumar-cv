import Button from '../../Components/Button/Button';

function About() {
    return (
        <div className="container home-container">
            <div className="home-banner">
                <img src={process.env.PUBLIC_URL + '/images/banner-image.jpg'} alt="banner" />
            </div>
            <div className="home-text">
                <h3>About me</h3>
                <p>UI Developer with 4+ years experience, seeking to use proven skills in UI prototyping to enhance user experience, deployed new features with 10% higher performance than previous employment. Completed jobs 15% before targets with 95% client scores. </p>
                
                <Button text="Download CV"></Button>
            </div>
            
        </div>
    );
}

export default About;