import React from "react";
import "./card.scss";

const Card = (props) => {
  return <button className={`card ${props.card_name}`}> {props.name} </button>;
};

export default Card;
