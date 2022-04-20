import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Portfolio() {
    return (
        <div className="inner-section">
            <div className="container">
                <div className="home-text">
                    <h3>My portfolio</h3>
                </div>
                <div className="pro-nav">
                    <a href='#pro-design-web' className="pro-nav-link">
                       Web
                    </a>
                    <a href='#pro-design-app' className="pro-nav-link">
                       Angular
                    </a>
                    <a href='#pro-design-react' className="pro-nav-link">
                       React
                    </a>
                    <a href='#pro-design' className="pro-nav-link">
                       Design
                    </a>
                </div>
                <h3 className="id-h3" id="pro-design-web">Web</h3>
                <div className="por-wrapp" >
                    <div className="por-wrapp-col">
                        <a href='https://hotelcard.com/' className="pro-nav-link" target="_blank" rel="noreferrer">
                        Hotelcard
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='http://xamion.in' className="pro-nav-link" target="_blank" rel="noreferrer">
                        Xamion
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='http://web.accoxi.com' className="pro-nav-link" target="_blank" rel="noreferrer">
                        Accoxi
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='http://at228.ofabi.com/zelloznew/index.html#' className="pro-nav-link" target="_blank" rel="noreferrer">
                        Zelloz
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='http://www.bdmconsultancy.com/' className="pro-nav-link" target="_blank" rel="noreferrer">
                        BDM consultancy
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='http://gentlemanchits.com/' className="pro-nav-link" target="_blank" rel="noreferrer">
                        Gentleman chits
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='http://www.snsgov-shj.ae/' className="pro-nav-link" target="_blank" rel="noreferrer">
                        SNSGov
                        </a>
                    </div>
                    <div className="por-wrapp-col">
                        <a href='https://nakshathraonline.com/' className="pro-nav-link" target="_blank" rel="noreferrer">
                        Nakshathra
                        </a>
                    </div>
                </div>
                <h3 className="id-h3" id="pro-design-app">App - Angular</h3>
                <div className="por-wrapp" >
                    
                    <div className="por-wrapp-col por-wrapp-col100">
                        <LazyLoadImage src={process.env.PUBLIC_URL + '/images/design/po-13.jpg'} alt="works"></LazyLoadImage>
                    </div>
                </div>

                <h3 className="id-h3" id="pro-design-react">My portfolio</h3>
                <div className="por-wrapp" >
                    <a href='https://krishnakumar-468.github.io/krishnakumar-cv/' className="pro-nav-link" target="_blank">
                       My portfolio
                    </a>
                </div>

                <h3 className="id-h3" id="pro-design">Design</h3>
                <div className="por-wrapp" >
                    
                    <div className="por-wrapp-col">
                        <LazyLoadImage src={process.env.PUBLIC_URL + '/images/design/po-1.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                        <LazyLoadImage src={process.env.PUBLIC_URL + '/images/design/po-2.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                        <LazyLoadImage src={process.env.PUBLIC_URL + '/images/design/po-3.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                        <LazyLoadImage src={process.env.PUBLIC_URL + '/images/design/po-4.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                        <LazyLoadImage src={process.env.PUBLIC_URL + '/images/design/po-5.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-6.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-7.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-8.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-9.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-10.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-11.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    <div className="por-wrapp-col">
                     <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/images/design/po-12.jpg'} alt="works"></LazyLoadImage>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Portfolio;