import React from 'react';
import ContactImg from '../assets/img/contact/localisation.webp';

const Footer = () => {
    return (
        <footer className="footer" id='contact'>
            <div className='footer_position'>
                <p><span className="span_decoration">Email:</span>guervin.loic@gmail.com</p>
                <p><span className="span_decoration">Location:</span>Pont Saint Vincent - France</p>
                <p><span className="span_decoration">Numéro:</span>06.61.35.12.23</p>
            </div>
        </footer>
    );
};

export default Footer;