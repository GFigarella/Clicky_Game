import React from "react";
import "./Header.css";

const Header = props => (
<div className="myHeader">
   <p id="myTitle"> Memory Clicky Game</p>
   <span id="description">Click on an image to earn a point, but you lose if you click the same image twice!</span>
</div>
);

export default Header;