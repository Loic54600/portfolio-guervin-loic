import React from 'react';

import ProfilAccueil from '../components/ProfilAccueil';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import Competence from '../components/Competence';
import Projets from '../components/Projets';


const Accueil = () => {
    return (
        <div>
            <ProfilAccueil /> 
            <Navigation />
            <Presentation/>
            <Competence />
            <Projets />
        </div>
    );
};

export default Accueil;