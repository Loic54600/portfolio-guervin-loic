import React from 'react';

import Css3Img from '../assets/img/competence/css3.webp';
import HTMLImg from '../assets/img/competence/html.webp';
import GithubImg from '../assets/img/competence/github.webp';
import SassImg from '../assets/img/competence/sass.webp';
import NodeImg from '../assets/img/competence/nodejs.webp';
import ReactImg from '../assets/img/competence/react.webp';

const Competence = () => {
    return (
        <section className="competence_body">
            <h2 className="competence">Mes Compétences</h2>
            <div className="competence_name">
                <div className="icone">
                    <img className="icone_img" alt="icone de github" src={GithubImg} />
                    <img className="icone_img" alt="icone de css" src={Css3Img} />
                    <img className="icone_img" alt="icone html" src={HTMLImg} />
                    <img className="icone_img" alt="icone sass" src={SassImg} />
                    <img className="icone_img" alt="icone node js" src={NodeImg} />
                    <img className="icone_img" alt="icone react" src={ReactImg} />
                </div>
                <div className='span_p'>
                <p><span className="span_decoration">Mes compétences acquises: </span>
                     Débutant dans le monde du développement, je suis muni des compétences de base du développeur web.
                    Titulaire du diplôme Intégrateur Web, je possède les connaissances
                    théoriques et pratiques qui me permettront d'exécuter mes futurs missions.
                </p>
                </div>
            </div>
        </section >
    );
};

export default Competence;

