import React from 'react';

import ProfilAccueil from '../components/ProfilAccueil';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import Projets from '../components/Projets';


const Accueil = () => {
    return (
        <div>
            <ProfilAccueil /> 
            <Navigation />
            <Presentation/>
            <Projets />
        </div>
    );
};

export default Accueil;