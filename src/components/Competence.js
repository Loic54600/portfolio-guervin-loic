import React from 'react';

import Css3Img from '../assets/img/competence/css3.webp';
import HTMLImg from '../assets/img/competence/html.webp';
import GithubImg from '../assets/img/competence/github.webp';
import SassImg from '../assets/img/competence/sass.webp';
import NodeImg from '../assets/img/competence/nodejs.webp';
import ReactImg from '../assets/img/competence/react.webp';

const Competence = () => {
    return (
        <section>
            <div className="bg">
                <div className="img-circle img-responsive" src="https://i.imgur.com/stRLLVB.jpg" alt="" />
                <h2 className='bg_h1'>Compétences</h2>
            </div>
            <div className="sec first">
                <img className="icone_img" alt="error" src={Css3Img} />
                <img className="icone_img" alt="error" src={HTMLImg} />
                <img className="icone_img" alt="error" src={GithubImg} />
                <img className="icone_img" alt="error" src={SassImg} />
                <img className="icone_img" alt="error" src={NodeImg} />
                <img className="icone_img" alt="error" src={ReactImg} />
            </div>
        </section >
    );
};

export default Competence;