import React from "react"

import b from "../images/back.svg"

function Card(props) {
  const {card, front = true, back, Component, height, style = {}, className = ""} = props;
  style.height = height;

  if (back) {
    return (
      <img src={b} className={`react-playing-card react-playing-card__back ${className}`} alt="card-back" style={style} />
    )
  }

  if (front) {
    return (
      <img src={card} className={`react-playing-card react-playing-card__back ${className}`} alt={card} style={style} />
    )
  }
}

export default Card
