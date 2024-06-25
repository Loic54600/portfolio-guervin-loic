import React from 'react';

import Franceimg from "../assets/img/reseau/francetravail.webp";
import Linkedinimg from "../assets/img/reseau/linkedin.webp";
import Twitterimg from "../assets/img/reseau/twitter.webp";
import Facebookimg from "../assets/img/reseau/facebook.webp";

const Footer = () => {
    return (
        <footer id="Footer">
            <div className="footer-navigation">
                <h3>Liens :</h3>
                <ul>
                    <li><a href="#home" className='a_hover'>Home</a></li>
                    <li><a href="#mesprojets" className='a_hover'>Mes projets</a></li>
                    <li><a href="#presentation" className='a_hover'>Présentation</a></li>
                    <li><a href="#contact" className='a_hover'>Contact</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact :</h3>
                <p><span className="span_decoration">Email:</span> Guervin.loic@gmail.com</p>
                <p><span className="span_decoration">Tel:</span> 06.61.35.12.23</p>
            </div>
            <div className="footer-social">
                <h3>Réseaux :</h3>
                <div className="social-icons">
                    <a href="https://www.francetravail.fr/" target="_blank"><img className='icone_width' src={Franceimg}/></a>
                    <a href="https://fr.linkedin.com/" target="_blank"><img className='icone-reseau' src={Linkedinimg}/></a>
                    <a href="https://x.com/" target="_blank"><img className='icone_reseau' src={Twitterimg}/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img className='icone-reseau' src={Facebookimg}/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;