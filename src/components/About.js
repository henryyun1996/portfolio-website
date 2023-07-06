import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Grid } from 'semantic-ui-react';
import FamilyPhoto from '../images/aboutMeFamily.png';

function About() {
  return (
    <div style={{
        backgroundColor: '#60a69e'
    }}>
        <div style={{ backgroundColor: '#f1ebcd', padding: '2% 0 2% 0' }}>
            <NavBar />
        </div>
        <div style={{ minHeight: '90vh',textAlign: 'center', paddingTop: '80px' }}>
            <Grid columns={2}>
                <Grid.Column>
                    <div style={{ margin: '15px 20px 80px 180px' }}>
                        <h1 style={{ color: '#f1ebcd', fontSize: '56px',fontFamily: 'Nexa' }}>about me</h1>
                        <h2 style={{ color: '#f1ebcd', fontSize: '24px', fontFamily: 'Nexa Light' }}>I'm a full stack Web Developer <br />based in Los Angeles, CA</h2>
                        <p style={{ color: 'black', margin: '35px 50px 0px 50px', fontSize: '20px', fontFamily: 'Crimson Pro' }}>I'm a Software Engineer that is proficient in JavaScript, Python, SQL, Flask and React.js. Growing up in Los Angeles and being raised by parents deeply involved in the fashion industry, I hope to join a company who's main focus is growth of not only company, but also the people and employees who fuel this growth. My background in healthcare and manufacturing has helped develop an eye for attention to detail while also keeping other's needs in mind. I aspire to leverage my creative abilities and make valuable contributions to a team's UI/UX design. <br /><br/> When not coding, I like to shoot hoops, go on walks with my dog or try out different cafes/ restaurants in Los Angeles with Joy (my wife)!</p>
                    </div>
                </Grid.Column>
                <Grid.Column>
                <div>
                    <img
                        src={FamilyPhoto}
                        alt="with Joy (wife)"
                        style={{
                        position: 'absolute',
                        top: '45%',
                        left: '45%',
                        transform: 'translate(-50%, -50%) scale(2.5)',
                        width: '90%',
                        maxWidth: '175px',
                        height: 'auto',
                        borderRadius: '100px'
                        }}
                    />
                </div>
                </Grid.Column>
            </Grid>
        </div>
        <div>
            <Footer style={{ position: 'relative', zIndex: 2 }} />
        </div>
    </div>
  );
}

export default About;



