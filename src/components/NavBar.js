import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    function handleGoHome() {
        navigate('/home');
    }

    return (
        <div className="navbar-container">
            <div>
                <h2
                    className="navbar-title"
                    onClick={handleGoHome}
                    style={{ color: '#60a69e', paddingLeft: '60px' }}
                >
                    Henry Yun <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" alt='Coding from Home Giphy' width="40"/>
                </h2>
            </div>
            <div className="navbar-buttons">
                <Link className="ui teal basic button" to="/about-me" style={{ fontFamily: 'Nexa Bold' }}>about me!</Link>
                <Link className="ui teal basic button" to="/portfolio" style={{ fontFamily: 'Nexa Bold' }}>portfolio</Link>
                <Link className="ui teal basic button" to="/contact" style={{ fontFamily: 'Nexa Bold' }}>contact</Link>
                <Link to="/">
                    <Button className="ui teal basic button"><i className="sign out alternate icon"></i></Button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
