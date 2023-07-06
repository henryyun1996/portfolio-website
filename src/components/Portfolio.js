import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Button } from 'semantic-ui-react';

function Portfolio() {
    return (
        <div>
            <div style={{ backgroundColor: '#f1ebcd', padding: '2% 0 2% 0' }}>
                <NavBar />
            </div>
            <div className="project-container" style={{ padding: '60px 0 110px 0', backgroundColor: '#60a69e' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', marginLeft: '20vh', marginRight: '45vh', textAlign: 'center' }}>
                    <div style={{ flex: '1' }}>
                        <h2>Noes Goes</h2>
                        <p>Noes Goes is an event planning app that is designed to enhance collaboration among users by allowing them to invite their friends as participants. The app utilizes Flask, a framework for building web applications, to construct a restful API that enables seamless communication between the web application frontend and the server backend. To ensure a personalized experience, a login feature is built using React.js, allowing users to create their own accounts with unique credentials that are encrypted using bcrypt. Users have the ability to add friends, create and edit events, as well as delete event elements through the implementation of CRUD (create, read, update, delete) actions. All data that users input onto the app is stored safely onto a SQL database.</p>
                        <Button className="ui inverted basic button" style={{ fontFamily: 'Crimson Pro', fontSize: '16px' }} onClick={(e) => window.location.href="https://github.com/henryyun1996/Phase-5-Capstone-Project"}>
                            <i className="github icon" style={{ cursor: 'pointer' }}></i>
                            github repository
                        </Button>
                    </div>
                    <div style={{ position: 'relative', width: '40%', height: 'auto' }}>
                        <iframe
                            title="ProgramReviewer"
                            src="https://www.loom.com/embed/b689437a7e38404391d7e387b4233fff?sid=6394230b-6afc-4288-aee1-9b10a78d44c2"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 120, width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '80px', marginLeft: '20vh', marginRight: '25vh', textAlign: 'center' }}>
                    <div style={{ position: 'relative', width: '40%', height: 'auto' }}>
                        <iframe
                            title="ProgramReviewer"
                            src="https://www.loom.com/embed/04e90207df0749a2960e422391c82c33?sid=4de0468d-7dec-4707-9c14-3fdacb39b8d7"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 20, width: '100%', height: '100%' }}
                        />
                    </div>
                    <div style={{ flex: '1', paddingLeft: '15%' }}>
                    <h2>Program Reviewer</h2>
                        <p>Program Reviewer is a CLI (command line interface) app that is specifically designed to enable users to leave reviews for courses they have taken. Built using Python, the app provides a command-line interface that allows logged-in users to easily submit their reviews and ratings for a faux tech school or program. To manage the data efficiently, the app employs SQLAlchemy, a popular Python library for working with databases. With SQLAlchemy, database tables are created with appropriate relationships to store login information, reviews and ratings. These tables ensure that the data persists and can be accessed as needed, providing a reliable and organized system for managing user feedback.</p>
                        <Button className="ui inverted basic button" style={{ fontFamily: 'Crimson Pro', fontSize: '16px' }} onClick={(e) => window.location.href="https://github.com/henryyun1996/Phase-5-Capstone-Project"}>
                            <i className="github icon" style={{ cursor: 'pointer' }}></i>
                            github repository
                        </Button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '80px', marginLeft: '20vh', marginRight: '45vh', textAlign: 'center' }}>
                    <div style={{ flex: '1' }}>
                        <h2>Art Walk</h2>
                        <p>Art Walk is an interactive art gallery web application that is designed to provide users with a customized art experience, allowing them to favorite specific art pieces. The backend of the application is constructed using a JSON file, which serves as a database to store user login information and their favorite art selections. To create a seamless user interface, a multi-page web application is built using React.js. The application utilizes client-side routing, enabling smooth navigation throughout the various pages of the gallery. A key feature of the app is the ability for users to favorite art pieces, with the selected favorites being posted to a db.JSON file, ensuring that the data is preserved for future reference. This combination of backend construction, React.js implementation, and art favoriting functionality makes for an engaging and customizable virtual art gallery experience.</p>
                        <Button className="ui inverted basic button" style={{ fontFamily: 'Crimson Pro', fontSize: '16px' }} onClick={(e) => window.location.href="https://github.com/henryyun1996/Phase-5-Capstone-Project"}>
                            <i className="github icon" style={{ cursor: 'pointer' }}></i>
                            github repository
                        </Button>
                    </div>
                    <div style={{ position: 'relative', width: '40%', height: 'auto' }}>
                        <iframe
                            title="ProgramReviewer"
                            src="https://www.loom.com/embed/b8fc1aa1ec16487d83721bd6311c3226?sid=32985747-bd93-46c3-9f74-cf6489243031"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 120, width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Footer style={{ position: 'relative', zIndex: 2 }} />
            </div>
        </div>
    )
}

export default Portfolio;

