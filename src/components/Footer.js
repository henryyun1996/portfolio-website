import React from "react";
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className="footer-container" style={{ textAlign: 'center', backgroundColor: '#70AFFF', padding: '2% 0 4% 0' }}>
            <Grid columns={2}>
                <Grid.Column>
                    <div style={{ marginLeft: '25vh', marginRight: '25vh' }}>
                        <h2 className="footer-title" style={{ fontFamily: 'Nexa Light', color: '#f1ebcd', textDecoration: 'underline' }}>
                            bio
                        </h2>
                        <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Crimson Pro' }}>
                            I'm a full stack web developer that is proficient in JavaScript, Python, SQL, Flask, and React.js. With a background in healthcare and manufacturing, I have a keen eye for detail and prioritize others' needs. Raised in Los Angeles within the fashion industry, I seek to join a growth-oriented company that values both organizational and personal development. My goal is to utilize my creativity and contribute to UI/UX design within a team.
                        </p>
                        <h2 style={{ fontFamily: 'Nexa Light', color: '#f1ebcd', textDecoration: 'underline' }}>website</h2>
                        <p style={{ color: 'black', fontFamily: 'Crimson Pro', fontSize: '16px' }}>All contents on this page were built and designed by me!</p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div style={{ marginLeft: '0vh' }}>
                        <h2 style={{ fontFamily: 'Nexa Light', color: '#f1ebcd', textDecoration: 'underline' }}>
                            menu
                        </h2>
                        <div className="footer-menu">
                            <Link to="/home" style={{ color: 'black', fontFamily: 'Crimson Pro Bold', fontSize: '20px' }}>home</Link>
                            <Link to="/about-me" style={{ color: 'black', fontFamily: 'Crimson Pro Bold', fontSize: '20px' }}>about me</Link>
                            <Link to="/portfolio" style={{ color: 'black', fontFamily: 'Crimson Pro Bold', fontSize: '20px' }}>portfolio</Link>
                            <Link style={{ color: 'black', fontFamily: 'Crimson Pro Bold', fontSize: '20px' }} onClick={(e) => window.location.href = "https://medium.com/me/stories/public"}>blog</Link>
                            <Link to="/contact" style={{ color: 'black', fontFamily: 'Crimson Pro Bold', fontSize: '20px' }}>contact</Link>
                        </div>
                        <h2 style={{ fontFamily: 'Nexa Light', paddingTop: '60px', color: '#f1ebcd', textDecoration: 'underline' }}>
                            stack
                        </h2>
                        <div>
                        <p align="center"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> </p>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Footer;