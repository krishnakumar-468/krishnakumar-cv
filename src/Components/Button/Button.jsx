import './Button.css';

function Button(props) {
    return (
        <a href={process.env.PUBLIC_URL + '/images/krishna-cv.pdf'} className="button" download>{props.text}</a>
    );
}

export default Button;