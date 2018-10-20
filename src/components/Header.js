import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>React Clicky Game</b></h1>
        <br/>
        <h5 className="subtitle">Instructions:</h5>
        <br/>
        <h5 className="subtitle">Click on an friend to get started! After each click, the friends will shuffle. <br/> The goal is to select each friend once, so everyone gets a turn!</h5>
    </div>
)

export default Header;