import React from "react";
import "./card.scss";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course_description?card_name=${props.card_name}`);
  };

  return (
      <button className={`card ${props.card_name}`} onClick={handleClick}>
        {props.name}
      </button>
  );
};

export default Card;