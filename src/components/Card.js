import React from "react"

import b from "../images/back.svg"

function Card(props) {
  const {card, front = true, back, Component, height, style, className} = props
  if (style) {
    if (height !== undefined)
      style.height = height;
  }
  else
    style = {height};

  if (back) {
    return (
      <img src={b} className={"card card__back " + (className || "")} alt="card-back" style={style} />
    )
  }

  if (front) {
    return (
      <img src={card} className={"card card__front " + (className || "")} alt={card} style={style} />
    )
  }
}

export default Card
