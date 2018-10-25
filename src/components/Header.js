import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Pokémon Memory Game!</b></h1>
        <br/>
        <p className="instructions alert alert-danger">Are you ready to become a Pokémon Master? To begin your journey, click on a starter Pokémon to get started! After each click everyone will shuffle. The goal is to select each Pokémon once, so everyone gets a turn!</p>
    </div>
)

export default Header;