import React from "react";
import "./Navbar.css";

const Navbar = props => (
<div className="myNav">
    <ul>
        <li>Clicky Game</li>
        <li>{props.myResult}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}
        </li>
    </ul>
</div>
);

export default Navbar;