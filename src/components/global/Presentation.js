import React from 'react';

const Presentation = () => {
    return (
        <div className="presentation_title">
            <div className="picture left">
                <div className="profil"></div>
            </div>
            <section id="presentation">
                <h2 className="title">Présentation</h2>
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