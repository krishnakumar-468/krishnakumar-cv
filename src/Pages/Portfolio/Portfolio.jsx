
function Portfolio() {
    return (
        <div className="inner-section">
            <div className="container">
                <div className="home-text">
                    <h3>My portfolio</h3>
                </div>
                <div className="por-wrapp">
                    <div className="por-wrapp-col">
                        <img src={process.env.PUBLIC_URL + '/images/design/po-1.jpg'} alt="works" />
                    </div>
                    <div className="por-wrapp-col">
                        <img src={process.env.PUBLIC_URL + '/images/design/po-2.jpg'} alt="works" />
                    </div>
                    <div className="por-wrapp-col">
                        <img src={process.env.PUBLIC_URL + '/images/design/po-3.jpg'} alt="works" />
                    </div>
                    <div className="por-wrapp-col">
                        <img src={process.env.PUBLIC_URL + '/images/design/po-4.jpg'} alt="works" />
                    </div>
                    <div className="por-wrapp-col">
                        <img src={process.env.PUBLIC_URL + '/images/design/po-5.jpg'} alt="works" />
                    </div>
                    <div className="por-wrapp-col">
                        <img src={process.env.PUBLIC_URL + '/images/design/po-6.jpg'} alt="works" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Portfolio;