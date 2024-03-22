import React from 'react';
import Profil from '../../assets/img/profil.webp'
import projet from '../../datas/projet.json'

import { Link } from 'react-router-dom';

const Projet = () => {
    return (
        <div className="competence_title" id="projets_professionnel">
            <h2 className="title">Projet professionnel</h2>
            <section className="gallery">
                <div className="gallery_encadrement">
                    {projet.map((projet) => {
                        return (
                            <Link to={`/projet/${projet.id}`} key={projet.id}>
                                <article className="gallery_article">
                                    <img className='gallery_img' alt=" Visuel du developpeur" src={Profil} loading='lazy' />
                                    <span className="gallery_title">{projet.title}</span>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Projet;