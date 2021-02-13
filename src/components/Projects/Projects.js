import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Title from '../Title/Title';
import Card from '../Card/Card';
import bank_img from '../../assets/images/bank.jpg';
import angular_img from '../../assets/images/angular.jpg';
import jemena_img from '../../assets/images/jemena.png';
import rpc_img from '../../assets/images/rpc.jpg';
import aws_img from '../../assets/images/aws.png';
import burger_img from '../../assets/images/burger.png';
import psd_img from '../../assets/images/psd.png';
import carrental_one_img from '../../assets/images/carrental_one.jpg';
import carrental_two_img from '../../assets/images/carrental_two.jpg';
import dating from '../../assets/images/dating.jpg';
import cv_img from '../../assets/images/cv.jpg';
import reddit_img from '../../assets/images/reddit.png';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import  './Projects.css';

const baseURL = "https://github.com/";

const details = [
    { img: burger_img, title: "Burger Ordering Website", skills: "ReactJS, Redux, Jest, Enzyme", url: baseURL + "vineet39/react-burger-app.git", liveURL: "https://vineet39.github.io/react-burger-app/", videoURL:"" },
    { img: cv_img, title: "Covid-19 Tracker Website", skills: "ReactJS, Material-UI", url: baseURL + "vineet39/react-covid-tracker.git", liveURL: "https://vineet39.github.io/react-covid-tracker/", videoURL:"" },
    { img: dating, title: "Dating Website", skills: ".Net Core 3.0, Angular 8, TypeScript", url: baseURL + "vineet39/dating-app", liveURL: "", videoURL:"https://youtu.be/AmxZA5F4Yy8" },
    { img: reddit_img, title: "Reddit clone (In progress)", skills: "ReactJS, GraphQL, TypeScript, Postgresql, MikroORM, TypeGraphQL", url: baseURL + "vineet39/react-reddit", liveURL: "", videoURL:"" },
    { img: angular_img, title: "Admin Banking Website", skills: ".Net Core 3.0, Angular 8, TypeScript", url: baseURL + "rmit-wdt2020/admin-banking-application", liveURL: "", videoURL:"" },
    { img: jemena_img, title: "Jemena Gas App", skills: ".Net Core 3.0, React Native, Redux", url: baseURL + "rmit-s3734938-vineet-bugtani/react-native-jemena-gasmeters", liveURL: "", videoURL:"https://youtu.be/cnWWMJBE5Lc" },
    { img: rpc_img, title: "Rock Paper Scissors", skills: "HTML, CSS, JS", url: baseURL + "rmit-s3734938-vineet-bugtani/rock-paper-scissors-game-website", liveURL: "https://rmit-s3734938-vineet-bugtani.github.io/rock-paper-scissors-game-website/", videoURL:"" },
    { img: aws_img, title: "Cloud Computing Project", skills: "AWS Services", url: baseURL + "rmit-s3740446-Ryan-Cassidy/CC-Assignment", liveURL: "", videoURL:"" },
    { img: bank_img, title: "Client Banking Website", skills: ".Net Core 3.0", url: baseURL + "rmit-wdt2020/customer-banking-application", liveURL: "", videoURL:"" },
    { img: psd_img, title: "PSD To HTML", skills: "Adobe PhotoShop, HTML, CSS, JS", url: baseURL + "rmit-s3734938-vineet-bugtani/psd-to-html-1", liveURL: "", videoURL:"" },
    { img: carrental_one_img, title: "Client Car Rental Website", skills: "Python, Flask, JS", url: baseURL + "rmit-s3740446-Ryan-Cassidy/PIoT-Assignment-2", liveURL: "", videoURL:"" },
    { img: carrental_two_img, title: "Admin Car Rental Website", skills: "Python, Flask, JS", url: baseURL + "rmit-s3734938-vineet-bugtani/PIoT-Assignment-3", liveURL: "", videoURL:"" },
];

const defaultCurrent = 1;

const maxCardsViewableAtATime = 6;


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: 0,
            maxValue: maxCardsViewableAtATime
        };
    }
    handleChange = value => {
        if (value <= 1) {
            this.setState({
                minValue: 0,
                maxValue: maxCardsViewableAtATime
            });
        } else {
            this.setState({
                minValue: this.state.maxValue,
                maxValue: value * maxCardsViewableAtATime
            });
        }
    };
    render() {
        return (
            <Aux>
                <div className="container my-projects" id="my-projects">
                    <Title title="My Projects" inverted={false} />
                    <div className="row">
                        {details.slice(this.state.minValue, this.state.maxValue).map(val => (
                            <Card key={val.title} img={val.img} title={val.title} skills={val.skills} url={val.url} liveURL={val.liveURL} videoURL={val.videoURL}/>
                        ))}
                    </div>
                    <div className="pagination">
                            <Pagination
                                defaultCurrent={defaultCurrent}
                                defaultPageSize={maxCardsViewableAtATime}
                                onChange={this.handleChange}
                                total={details.length}
                            />
                        </div>
                </div>
            </Aux>
        );
    }
}

export default Projects;