import React from 'react';

import github from "../../assets/img/competence/github.webp"
import html from "../../assets/img/competence/html.webp"
import css from "../../assets/img/competence/css3.webp"
import node from "../../assets/img/competence/nodejs.webp"
import sass from "../../assets/img/competence/sass.webp"


const Competence = () => {
    return (
        <section className="competence_title" id="competences">
            <h2 className="title">Compétences</h2>
            <div className="icone_flex">
                <img className="icone" alt="icone github" src={github} />
                <img className="icone" alt="icone html" src={html} />
                <img className="icone" alt="icone css" src={css} />
                <img className="icone" alt="icone node" src={node} />
                <img className="icone" alt="icone sass" src={sass} />
            </div>
        </section>
    );
};

export default Competence;