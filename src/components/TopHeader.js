import React from 'react';

const TopHeader = () => {
    return (
        <section>
            <header class="showcase">
                <div className="showcase-top">
                </div>
                <div class="showcase-content">
                    <h1 className="showcase-content_title">Bienvenu sur mon portfolio</h1>
                    <p className="showcase-content_p" >Guervin Loïc</p>
                    <p className="showcase-content_p">Développeur Web</p>
                </div>
                <div className="showcase-content_about">
                <h2 className="showcase-content_h2"> A propos</h2>
                </div>
            </header>
        </section>
    );
};

export default TopHeader;