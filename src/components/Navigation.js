import React from 'react';
import IconeImg from '../assets/img/lg_logo.jpg';

const Navigation = () => {
    return (
        <section className="navbar" id='navbar'>
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                    <a href="#home" target="_blank">
                        <img src={IconeImg} className='iconeimg'/></a>
                    </div>
                </div>
                <div className="nav-links">
                <a href="#home">Accueil</a>
                    <a href="#mesprojets">Mes projets</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </section>
    );
};

export default Navigation;