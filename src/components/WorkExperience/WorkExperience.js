import React from 'react';
import Aux from '../../hoc/Aux';
import Title from '../Title/Title';
import WorkTab from '../WorkTab/WorkTab';
import classes from './WorkExperience.css';
import $ from 'jquery';
import Popper from 'popper.js';

const workExperience = () => {
    const details = {
        Newgen: {
            companyname: "Web Developer, Newgen Apparel", detail: "One day/week | Melbourne | July 2020 - Ongoing"
            , responsibilities: ["Fixing bugs and issues reported to product owner by users.", "Redesigning of front-end to make it mobile-responsive using the latest design principles."], year:"2020"
        },
        Jemena: {
            companyname: "Software Developer, Jemena", detail: "Internship | Melbourne | March 2020 - August 2020"
            , responsibilities: ["Designed the Web API in ASP.NET Core with another back-end developer, utilizing design patterns like repository pattern to produce quality code." 
            ,"Coded the entire front-end of the application in React Native.  Some notable features of the app include barcode scanning of gas meters, offline capabilities, refreshing data via APIs on availability of the internet."
            ,"Participated in agile ceremonies such as sprint planning, reviews, and retro sessions."], year:"2020"
        },
        Accenture: {
            companyname: "Web Developer, Accenture", detail: "Full time | Mumbai | Nov 2016 - June 2018"
            , responsibilities: ["Worked on a UI rich web admin panel using front-end/user interface (UI) technologies like object-oriented JavaScript, Type Script, Angular 2.0, Bootstrap,  CSS Media Queries. The admin panel was used by project managers to perform CRUD, search and filter operations."
            ,"Worked on reactive forms along with custom validations for particular fields."
            ,"Made modifications and developed new web services in .NET Core to be consumed by front-end."], year:"2016"
        },
    };
    
    const allItems = Object.keys(details).map(key =>
        <WorkTab key={key} companyname={details[key].companyname} detail={details[key].detail} responsibilities={details[key].responsibilities} year={details[key].year} skills={details[key].skills} />
    );

    const allItemsExceptFirst = Object.keys(details).slice(1).map(key => (
        <div className="carousel-item" key={key}>
            <WorkTab key={key} companyname={details[key].companyname} detail={details[key].detail} responsibilities={details[key].responsibilities} />
        </div>
    ));

    return (
        <Aux>
            <div className="experience">
                <Title title="Work Experience" className="worktitle" />
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {allItems[0]}
                        </div>
                        {allItemsExceptFirst}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="work-row">
                    {allItems}
                </div>
            </div>
        </Aux>
    );
};

export default workExperience;