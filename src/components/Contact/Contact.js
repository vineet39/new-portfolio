import React from 'react';
import Hoc from '../../hoc/Hoc';
import ContactDetails from '../ContactDetails/ContactDetails';
import  './Contact.css';

const contact = () => {
    const details = {
        phone: { icon: "fa fa-mobile", detail: "9833760969" },
        email: { icon: "fa fa-envelope-square", detail: "vinit.bugtani@gmail.com" },
    };

    const items = Object.keys(details).map(key =>
        <ContactDetails key={key} icon={details[key].icon} detail={details[key].detail} />
    );

    return (
        <Hoc>
            <div className="contact-me">
                <div className="contact-details">
                    <div className="row">{items}</div>
                </div>
                <div className="footer">
                    <span>Site powered by ReactJS&nbsp;&nbsp;&nbsp;&nbsp;&copy; Copyright {new Date().getFullYear()}</span>
                </div>
            </div>
        </Hoc>
    );
};

export default contact;