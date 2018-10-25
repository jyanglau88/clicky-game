import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-dark bg-dark">
        <h3 className="navbar-brand" href="/" id="logo">Pokémon React Clicky Game</h3>
        <h5 className="ml-auto mt-2" id="scoreboard">Score: {props.score} | Top Score: {props.top} </h5>
    </nav>
)

export default Navbar;