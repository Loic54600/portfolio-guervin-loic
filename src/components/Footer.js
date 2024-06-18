import React from 'react';
import IconeImg from '../assets/img/lg_logo.jpg';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer_left">
            <div class="nav-header">
                    <div class="nav-title">
                    <a href="#home" target="_blank">
                        <img src={IconeImg} className='icone_img'/></a>
                    </div>
                </div>
                
            </div>
            <div class="footer_center">
                <div>
                    <p><span>France</span>Pont Saint Vincent</p>
                </div>
                <div>
                    <p>06.61.35.12.23</p>
                </div>
                <div>
                    <p>guervin.loic@gmail.com</p>
                </div>
            </div>
            <div class="footer_left">
                <div>
                    <p><span>France</span>Pont Saint Vincent</p>
                </div>
                <div>
                    <p>06.61.35.12.23</p>
                </div>
                <div>
                    <p>guervin.loic@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;