import React from "react"

import b from "../images/back.svg"

function Card(props) {
  const {card, front = true, back, Component, height} = props
  const style = {height}

  if (back) {
    return (
      <img src={b} className="card card__back" alt="card-back" style={style} />
    )
  }

  if (front) {
    return (
      <img src={card} className="card card" alt={card} style={style} />
    )
  }
}

export default Card
