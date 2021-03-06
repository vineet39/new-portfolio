import React from 'react';
import Aux from '../../hoc/Aux';
import './Profile.css';

const profile = () => {
    const details = {
        intro: "HII! I'M VINEET",
        profile: "I am a diligent and highly motivated graduate from RMIT University looking for a software developer job. I would be bringing to the table 2+ years of industry experience in writing full-stack code, excellent debugging skills, and a desire to upskill and improve my craft as a developer.",
    };

    return (
        <Aux>
            <div className="profile" id="profile">
                <p>{details.intro}</p>
                <h1>{details.profile}</h1>
            </div>
        </Aux>
    );
};

export default profile;