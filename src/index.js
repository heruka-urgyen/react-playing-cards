import React from "react"

import TcN from "./components/TcN"
import TcB from "./components/TcB"
import FcN from "./components/FcN"
import FcB from "./components/FcB"

const selectDeck = deckType => {
  if (deckType === "big-face") {return TcB}
  if (deckType === "big-face four-color") {return FcB}
  if (deckType === "four-color") {return FcN}

  return TcN
}

function Card(props) {
  const {deckType} = props
  const Component = selectDeck(deckType)

  return <Component {...props} />
}

export default Card
