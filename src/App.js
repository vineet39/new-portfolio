import React from 'react';
import './App.css';
import Aux from '../src/hoc/Aux';
import Projects from '../src/components/Projects/Projects';
import Contact from '../src/components/Contact/Contact';
import WorkExperience from '../src/components/WorkExperience/WorkExperience';
import Profile from '../src/components/Profile/Profile';
import ScrollToTop from '../src/containers/ScrollToTop/ScrollToTop';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Aux>
      <Helmet>
        <title>React Helmet Tutorial</title>
        <meta name="keywords" content="Vineet, Bugtani, RMIT, Portfolio, Software, Developer, Profile, Personal, Website, Github, Graduate, Masters, IT, Information, Technology, Application, App, Engineer" />
        <meta name="description" content="Vineet Bugtani's personal portfolio. Graduate software developer actively seeking a job in the software industry." />
        <meta name="author" content="Vineet Bugtani" />
        <meta name="google-site-verification" content="YHzQSrlf8B4xrNccsH6r0Qx3iP5SJ4H6AdwIYIKwpUw" />
        <title>Vineet Bugtani</title>
      </Helmet>
      <ScrollToTop />
      <Profile />
      <WorkExperience />
      <Projects />
      <Contact />

    </Aux>
  );
}

export default App;
