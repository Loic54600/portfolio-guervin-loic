import React from 'react';
import profil from '../../src/assets/img/profil.webp'

const Presentation = () => {
    return (
        <section id='presentation'><h2 className="competence">Présentation</h2>
            <div className="card">
                <div className="user_card">
                    <div className="user_card_img">
                        <img src={profil} alt='photo du profil' className='img_profil'/>
                    </div>
                    <div className="user_card_info">
                        <h2>Guervin Loïc</h2>
                        <p><span className="span_decoration">Email:</span>guervin.loic@gmail.com</p>
                        <p><span className="span_decoration">Location:</span>Pont Saint Vincent - France</p>
                        <p><span className="span_decoration">Qualitées:</span>Oragnisation, autonomie, créativité</p>
                        <p><span className="span_decoration">A propos de moi:</span> 
                        Passionné par l'informatique depuis de nombreuses années, je suis à la recherche d'un poste dans le 
                        domaine du développement pour mettre mes compétences et mon expérience au service d'une entreprise dynamique.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Presentation;