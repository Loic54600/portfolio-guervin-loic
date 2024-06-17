import React from 'react';
import IconeImg from '../assets/img/lg_logo.jpg';

const Navigation = () => {
    return (
        <section className="navbar" id='navbar'>
            <div class="nav">
                <div class="nav-header">
                    <div class="nav-title">
                    <a href="#home" target="_blank">
                        <img src={IconeImg} className='iconeimg'/></a>
                    </div>
                </div>
                <div class="nav-links">
                    <a href="#mesprojets">Mes projets</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </section>
    );
};

export default Navigation;