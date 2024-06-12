import React from 'react';

import testimg from "../assets/img/projet/argentbank/argentbankvisuel.webp"

import ProjetDatas from "../datas/projetdata";


const Projets = () => {
    return (
        <section className="projet_body">
            <h2 className="competence">Mes projets réalisés</h2>
            {ProjetDatas.map((ProjetData) => {
                return (
                    <div className="projet" key={ProjetData.id}>
                        <div className="projet_card">
                            <div className="projet_card_img">
                                <img src={ProjetData.src} alt="" />
                            </div>
                            <div className="projet_card_info">
                                <h2>Mohamed Yousef</h2>
                                <p><span className="projet_card_decoration">Nom du projet:</span>{ProjetData.title}</p>
                                <p><span className="projet_card_decoration">Réalisation:</span>{ProjetData.realisation}</p>
                                <p><span className="projet_card_decoration">Description:</span>{ProjetData.description}</p>
                                <div className="button_placement">
                                <a className="button_decoration" href={ProjetData.github}>Lien github</a>
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