import React from "react";
import "./Navbar.css";

const Navbar = props => (
<div className="myNav">
    <ul>
        <li>Clicky Game</li>
        <li>Click and image to begin</li>
        <li>Score: {props.score} | Top Score: 0
        </li>
    </ul>
</div>
);

export default Navbar;