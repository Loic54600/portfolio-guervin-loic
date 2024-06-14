import React from 'react';
import profil from '../../src/assets/img/profil.webp'

const Presentation = () => {
    return (
        <section id='presentation'>
            <div className="card">
                <div className="user_card">
                    <div className="user_card_img">
                        <img src={profil} alt='photo du profil'/>
                    </div>
                    <div className="user_card_info">
                        <h2>Guervin Loïc</h2>
                        <p><span>Email:</span>guervin.loic@gmail.com</p>
                        <p><span>Location:</span>Pont Saint Vincent - France</p>
                        <p><span>A propos de moi:</span> Web Developer</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Presentation;