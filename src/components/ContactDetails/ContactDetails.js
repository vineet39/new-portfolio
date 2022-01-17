import React from 'react';
import  './ContactDetails.css';

const contactDetails = (props) => (
    <div className="col-lg-6 col-md-6 col-sm-12 main">
        <i className={props.icon}></i>
        <p>{props.detail}</p>
    </div>
);

export default contactDetails;