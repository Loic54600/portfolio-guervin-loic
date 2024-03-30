import React from 'react';

import Loader from '../components/global/Loader';
import Navigation from '../components/global/Navigation';
import Presentation from '../components/global/Presentation';
import Competence from '../components/global/Competence';
import Github from '../components/global/Github';
/*import Projet from '../components/global/Projet' */
import Contact from '../components/global/Contact';
import Footer from '../components/global/Footer';



/*import projets from '../datas/projet.json'*/

{/*function getProjet() {
    const projetID = window.location.pathname.replace('/projet/', '');
    const projet = projets.find((projet) => { return projet.id === projetID })
    return projet !== null ? projet : [];
} */}


const Home = () => {
    return (
        <section className="main">
            <Loader/>
            <Navigation />
            <section className="main_home">
                <Presentation />
                <Competence />
                <Github />
                {/*<Projet projet={getProjet()} />*/}
                <Contact />
            </section>
            <Footer />
        </section>
    );
};

export default Home;