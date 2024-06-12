import React from 'react';

const Navigation = () => {
    return (
        <section className="navbar">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Profil</a></li>
                <li><a href="#contact">Compétences</a></li>
                <li><a href="#about">Projet</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
        </section>
    );
};

export default Navigation;