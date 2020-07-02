import React, {useState} from "react"
import ReactDOM from "react-dom"

import "./index.css"

import Card from "../../src/index.js"

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
const suits = ["c", "d", "h", "s"]

const clubs = ranks.map(r => r + suits[0])
const diamonds = ranks.map(r => r + suits[1])
const hearts = ranks.map(r => r + suits[2])
const spades = ranks.map(r => r + suits[3])

function Example() {
  const [deckType, selectDeck] = useState("basic")
  const [side, changeSide] = useState({back: false})

  return (
    <div className="example">
      <select
        className="example-selector"
        value={deckType}
        onChange={e => selectDeck(e.target.value)}>

        <option value="basic">Basic</option>
        <option value="four-color">Basic four-color</option>
        <option value="big-face">Large face</option>
        <option value="big-face four-color">Large face four-color</option>
      </select>
      <label className="side-switch-label">
        <input
          type="checkbox"
          checked={!side.back}
          onChange={_ => changeSide(s => ({back: !s.back}))}
        />
        front
      </label>
      <ul className="cards">
        {
          clubs.map(c =>
            <li key={c}>
              <Card card={c} {...side} deckType={deckType} height="100px" />
            </li>
          )
        }
      </ul>
      <ul className="cards">
        {
          diamonds.map(c =>
            <li key={c}>
              <Card card={c} {...side} deckType={deckType} height="100px" />
            </li>
          )
        }
      </ul>
      <ul className="cards">
        {
          hearts.map(c =>
            <li key={c}>
              <Card card={c} {...side} deckType={deckType} height="100px" />
            </li>
          )
        }
      </ul>
      <ul className="cards">
        {
          spades.map(c =>
            <li key={c}>
              <Card card={c} {...side} deckType={deckType} height="100px" />
            </li>
          )
        }
      </ul>
    </div>
  )
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
)
