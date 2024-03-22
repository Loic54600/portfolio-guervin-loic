import React from 'react';
import Profil from '../../assets/img/profil.webp'

const Presentation = () => {
    return (
        <div className="presentation_title">
            <h2 className="title">Présentation</h2>
            <section id="presentation">
                <div className="picture left">
                    <img className='presentation_img' alt=" Visuel du developpeur" src={Profil} loading='lazy' />
                </div>
                <div id="about-me">
                    <h3 className="about-me__title">Bienvenu sur mon portfolio !</h3>
                    <h4 className="about-me__introduction">
                    Après avoir travaillé plusieurs années dans le domaine informatique, 
                    j'ai choisi de me reconvertir dans un domaine qui me passionne : le développement web.
                    </h4>
                    <p className="about-me__introduction">Vous pouvez consulter ci-dessous mes projets réalisés 
                    avec OpenClassRooms, bonne visite !   
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Presentation;