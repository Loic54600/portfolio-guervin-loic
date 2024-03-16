import React from 'react';
import Navigation from '../components/global/Navigation';
import Presentation from '../components/global/Presentation';
import Footer from '../components/global/Footer';


const Home = () => {
    return (
        <section className="main_home">
            <Navigation />
            <Presentation />
            <Footer />
        </section>
    );
};

export default Home;