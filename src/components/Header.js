import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Pokémon Memory Game!</b></h1>
        <p>
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Instructions:</a>
        </p>
        <div className="collapse" id="collapseExample">
            <div className="card card-body instructions">
                Are you ready to become a Pokémon Master? To begin your journey, click on a starter Pokémon to get started! After each click everyone will shuffle. The goal is to select each Pokémon once, so everyone gets a turn!
  </div>
        </div>
    </div>
)

export default Header;