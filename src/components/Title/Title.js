import React from 'react';
import Hoc from '../../hoc/Hoc';
import  './Title.css';

const title = ( props ) => {
    return (
        <Hoc>
            <div className={`title ${props.inverted ? 'title-inverted' : ''}`}>
                <h2 id="title">{props.title}</h2>
            </div>
        </Hoc>
    );
};

export default title;