import React from 'react';
import Profil from '../../assets/img/profil.webp'

const Presentation = () => {
    return (
        <div className="presentation_title"><h2 className="title">Présentation</h2>
            <section id="presentation">
                <div className="picture left">
                    <img className='presentation_img' alt=" Visuel du developpeur" src={Profil} loading='lazy' />
                </div>
                <div id="about-me">
                    <h3 class="about-me__title">A propos de moi</h3>
                    <h4 class="about-me__introduction">1111111111111111111111111111111
                        11111111111111111111111111111111111111111111111111111111111111111
                        11111111111111111111111111111111111111111111111111111111111111111</h4>
                    <p>1111111111111111111111111111111111111111111111111111111111111111111
                        11111111111111111111111111111111111111111111111111111111111111111
                        111111111111111111111111111111111111111111111111111111111111111111111
                        111111111111111111111111111111111111111111111111111111111111111111
                        11111111111111111111111111111111111111111111111111111111111111
                        111111111111111111111111111
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Presentation;