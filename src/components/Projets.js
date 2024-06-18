import React from 'react';
import ProjetDatas from "../datas/projetdata";

import Htmlimg from '../assets/img/competence/html.webp'
import Cssimg from '../assets/img/competence/css3.webp'
import Sassimg from '../assets/img/competence/sass.webp'
import Javascriptimg from '../assets/img/competence/javascript.webp'
import Githubimg from '../assets/img/competence/github.webp'
import Nodejsimg from '../assets/img/competence/nodejs.webp'
import Reactimg from '../assets/img/competence/react.webp'


const Projets = () => {
    return (
        <section className="projet_body" id='mesprojets'>
            <h2 className="competence">Mes projets réalisés</h2>
            {ProjetDatas.map((ProjetData) => {
                return (
                    <div className="projet" key={ProjetData.id}>
                        <div className="projet_card">
                            <div className="projet_card_img">
                                <img src={ProjetData.src} alt="" />
                            </div>
                            <div className="projet_card_info">
                                <p><span className="projet_card_decoration">Nom du projet:</span>{ProjetData.title}</p>
                                <p><span className="projet_card_decoration">Réalisation:</span>{ProjetData.realisation}</p>
                                <p><span className="projet_card_decoration">Description:</span>{ProjetData.description}</p>
                                <div className="button_placement">
                                    <a className="button_a" href={ProjetData.github}>Github</a>
                                    <a className="button_a" href={ProjetData.adressegithub}>Visuel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Projets;