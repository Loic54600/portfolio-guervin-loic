import React from 'react';
import profil from '../../src/assets/img/lg_logo.jpg';


const ProfilAccueil = () => {
    return (
        <section className="home section" id='home'>
            <div className="home_rectangle"></div>
            <div className="home_container container grid">
                <div className="home_profil">
                    <div className="profil_content">
                        <img src={profil} alt="image" className="profil_img" />
                    </div>
                </div>
                <div className="home_content grid">
                    <div className="home_data grid">
                        <h1 className="home_profession">Développeur Web & Visual Designer</h1>
                        <h2 className="home_profession_special">Front-end</h2>
                    </div>
                    <a href="#navbar" >
                        <div className="home_button decoration_button">
                           Accéder au profil
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProfilAccueil;