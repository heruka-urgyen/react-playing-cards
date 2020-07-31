React playing cards
===================

A simple react component that renders svg playing cards by Adrian Kennard. Cards downloaded from https://www.me.uk/cards/ and distributed under CC0 license.

## Usage

```
// includes all four deck types; very heavy
import Card from "@heruka-urgyen/react-playing-cards"

<Card card={card} deckType={deckType} height="XXpx" back />

// separate imports for decks:
// TcN - two colors normal faces
// TcB - two colors big faces
// FcN - four colors normal faces
// FcB - four colors big faces
import Card from "@heruka-urgyen/react-playing-cards/lib/TcN"
import Card from "@heruka-urgyen/react-playing-cards/lib/TcB"
import Card from "@heruka-urgyen/react-playing-cards/lib/FcN"
import Card from "@heruka-urgyen/react-playing-cards/lib/FcB"

<Card card={card} height="XXpx" back />

where
// card rank and suit, e.g 2c, Kh, Ad, etc
  card :: String
  card = rank + suit
    where
      rank = (2 | 3 ... 9 | T | J | Q | K | A)
      suit = (c | d | h | s)

// various card styles
  deckType :: String
  deckType = (basic | four-color | big-face | big-face four-color)

// card height in px
  height :: String

// show front (true by default, can be omitted)
  front :: Boolean

// show back
  back :: Boolean
```

## Showcase

https://heruka-urgyen.github.io/react-playing-cards/

```
// building manually

cd example
npx webpack

// open dist/index.html in browser
```
