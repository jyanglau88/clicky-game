import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Pokémon Memory Game!</b></h1>
        <br/>
        <h5 className="subtitle">Are you ready to become a Pokémon Master?</h5>
        <br/>
        <h5 className="subtitle">Click on a starter Pokémon to get started! After each click everyone will shuffle. <br/> The goal is to select each Pokémon once, so everyone gets a turn!</h5>
    </div>
)

export default Header;