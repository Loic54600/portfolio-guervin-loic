import React from 'react';

import ProfilAccueil from '../components/ProfilAccueil';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import Projets from '../components/Projets';
import Footer from '../components/Footer';


const Accueil = () => {
    return (
        <div>
            <ProfilAccueil /> 
            <Navigation />
            <Presentation/>
            <Projets />
            <Footer />
        </div>
    );
};

export default Accueil;