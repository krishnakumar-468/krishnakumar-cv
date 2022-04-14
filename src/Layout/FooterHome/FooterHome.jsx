import './FooterHome.css';

function FooterHome() {
    return (
        <div className="footer-home container">
            <div>
                <p><a href="tel:9495193383">Call me -  +91 9495193383</a></p>
            </div>
            <div className="send-query">
            <span className="material-icons">question_mark</span>
                <div>
                    <h4>Any question</h4>
                    <h3>Send your query</h3>
                </div>
                
            </div>
        </div>
    );
}

export default FooterHome;