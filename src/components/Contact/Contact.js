import React from 'react';
import Aux from '../../hoc/Aux';
import ContactDetails from '../ContactDetails/ContactDetails';
import  './Contact.css';

const contact = () => {
    const details = {
        phone: { icon: "fa fa-mobile", detail: "0414092713" },
        email: { icon: "fa fa-envelope-square", detail: "vinit.bugtani@gmail.com" },
        location: { icon: "fa fa-map-marker", detail: "Melbourne" }
    };

    const items = Object.keys(details).map(key =>
        <ContactDetails key={key} icon={details[key].icon} detail={details[key].detail} />
    );

    return (
        <Aux>
            <div className="contact-me">
                <div className="contact-details">
                    <div className="row">{items}</div>
                </div>
                <div className="footer">
                    <span>Site powered by ReactJS&nbsp;&nbsp;&nbsp;&nbsp;&copy; Copyright {new Date().getFullYear()}</span>
                </div>
            </div>
        </Aux>
    );
};

export default contact;