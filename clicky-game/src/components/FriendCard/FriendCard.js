import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img height="250px" width="330px" alt={props.name} src={props.image} onClick= {() => props.removeCard(props.id)}/>
    </div>
    {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Address:</strong> {props.location}
        </li>
      </ul>
    </div> */}
    {/* <span className="remove" onClick= {() => props.removeCard(props.id)}>𝘅</span> */}
  </div>
);

export default FriendCard;
