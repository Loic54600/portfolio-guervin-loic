import React from 'react';

import Navigation from '../components/global/Navigation';
import Presentation from '../components/global/Presentation';
import Competence from '../components/global/Competence';
import Projet from '../components/global/Projet'
import Contact from '../components/global/Contact';
import Footer from '../components/global/Footer';

import projets from '../datas/projet.json'


function getProjet() {
    const projetID = window.location.pathname.replace('/projet/', '');
    const projet = projets.find((projet) => { return projet.id === projetID })
    return projet !== null ? projet : [];
}

const Home = () => {
    return (
        <section className="main_home">
            <Navigation />
            <Presentation />
            <Competence />
            <Projet projet={getProjet()} />
            <Contact/>
            <Footer />
        </section>
    );
};

export default Home;