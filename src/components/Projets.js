import React from 'react';
import ProjetDatas from "../datas/projetdata";


const Projets = () => {
    return (
        <section className="projet_body" >
            <h2 className="competence" id='mesprojets'>Mes projets réalisés</h2>
            {ProjetDatas.map((ProjetData) => {
                return (
                    <div className="projet" key={ProjetData.id}>
                        <div className="projet_card">
                            <div className="projet_card_img">
                                <img src={ProjetData.src} alt={ProjetData.descriptionImage} />
                            </div>
                            <div className="projet_card_info">
                                <p><span className="projet_card_decoration">Nom du projet:</span><span className="projet_card_decoration_title">{ProjetData.title}</span></p>
                                <p><span className="projet_card_decoration">Réalisation:</span><span className="projet_card_decoration_title">{ProjetData.realisation}</span></p>
                                <p><span className="projet_card_decoration">Code:</span><span className="projet_card_decoration_title">{ProjetData.code}</span></p>
                                <p><span className="projet_card_decoration">Description:</span><span className="projet_card_decoration_title">{ProjetData.description}</span></p>
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