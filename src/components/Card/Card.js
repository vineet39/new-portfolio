import React from 'react';
import Hoc from '../../hoc/Hoc';
import './Card.css';
import axios from '../../../src/axios';

const card = (props) => {
    const url = props.url;
    const videoOrLiveUrl = props.liveURL !== "" ? props.liveURL : props.videoURL;
    return (
        <Hoc>
            <div className="col-lg-4 col-md-6">
                <div className="card my-card">
                    <img className="card-img-top" src={props.img} alt="Img Not available" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-title">{props.skills}</h6>
                        <div className="options">
                            {(props.liveURL !== "" || props.videoURL !== "") &&
                                <button className="btn mb-2" onClick={() => sendNotification(`${props.title} Live/Video Url`, videoOrLiveUrl)}>
                                    <span className="btntext">{props.liveURL !== "" ? <span className="btntext">View <i className="fa fa-external-link-square"></i></span> : <span className="btntext">View <i className="fa fa-youtube" id="youtube-icon"></i></span>}</span>
                                </button>
                            }
                            <button className="btn mb-2 ml-1" onClick={() => sendNotification(`${props.title} Github Url`, url)}>
                                <span className="btntext">View <i className="fa fa-github"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Hoc>
    )
};

const sendNotification = (data, url) => {
    axios.post('/openedURL.json', JSON.stringify(data)).then(() => {
        window.open(url, '_blank');
    }).catch(() => {
        window.open(url, '_blank');
    })
        
}

export default card;