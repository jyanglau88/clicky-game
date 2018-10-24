import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/" id="logo"><h3>Pokémon React Clicky Game</h3></a>
        <h5 className="ml-auto mt-2" id="scoreboard">Score: {props.score} | Top Score: {props.top} </h5>
    </nav>
)

export default Navbar;