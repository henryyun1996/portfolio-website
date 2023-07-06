import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Welcome() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: "#f1ebcd" }}>
            <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" alt='Coding from Home Giphy' width="100"/>
            <h1>Hello there 👋, I'm Henry (He/ Him)</h1>
            <h2>Thanks for visiting my page</h2>
            <Link to="/home">
                <Button className="ui teal basic button" style={{ fontFamily: 'Nexa Bold' }}>Enter</Button>
            </Link>
        </div>
    )
}

export default Welcome;