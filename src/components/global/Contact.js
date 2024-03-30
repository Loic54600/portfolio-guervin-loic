import React from 'react';
import Localisation from "../../assets/img/contact/localisation.webp";


const Contact = () => {
    return (
        <section className="contact_title" id="contact">
            <h2 className="title">Contact</h2>
            <div>
                <img className="localisation_img" alt="carte de localisation" src={Localisation} />
            </div>
        </section>
    );
};

export default Contact;