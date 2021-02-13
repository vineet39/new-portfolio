import React from 'react';
import Aux from '../../hoc/Aux';
import  './Title.css';

const title = ( props ) => {
    return (
        <Aux>
            <div className={`title ${props.inverted ? 'title-inverted' : ''}`}>
                <h2 id="title">{props.title}</h2>
            </div>
        </Aux>
    );
};

export default title;