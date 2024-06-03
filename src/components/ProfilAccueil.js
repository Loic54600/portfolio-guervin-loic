import React from 'react';
import profil from '../../src/assets/img/profil.webp'
import { NavLink } from 'react-router-dom';


const ProfilAccueil = () => {
    return (
        <section className="home section">
            <div className="home_rectangle"></div>
            <div className="home_container container grid">
                <div className="home_profil profil">
                    <div className="profil_content">
                        <img src={profil} alt="image" className="profil_img" />
                    </div>
                </div>
                <div className="home_content grid">
                    <div className="home_data grid">
                        <h1 className="home_profession">Web & Visual Designer</h1>
                        <h2 className="home_profession_special">Front-end</h2>
                        <h3 className="home_name">Guervin Loïc</h3>
                    </div>
                    <a href="#" download="" className="home_button button">Download CV</a>
                    <NavLink to="/home" >
                        <div className="home_button button">
                           Accéder au profil
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default ProfilAccueil;