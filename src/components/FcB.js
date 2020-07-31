import React from "react"

import Card from "./Card"

// four color big face
import fcbf2c from "../images/4color-bf/2C.svg"
import fcbf3c from "../images/4color-bf/3C.svg"
import fcbf4c from "../images/4color-bf/4C.svg"
import fcbf5c from "../images/4color-bf/5C.svg"
import fcbf6c from "../images/4color-bf/6C.svg"
import fcbf7c from "../images/4color-bf/7C.svg"
import fcbf8c from "../images/4color-bf/8C.svg"
import fcbf9c from "../images/4color-bf/9C.svg"
import fcbfTc from "../images/4color-bf/TC.svg"
import fcbfJc from "../images/4color-bf/JC.svg"
import fcbfQc from "../images/4color-bf/QC.svg"
import fcbfKc from "../images/4color-bf/KC.svg"
import fcbfAc from "../images/4color-bf/AC.svg"

import fcbf2d from "../images/4color-bf/2D.svg"
import fcbf3d from "../images/4color-bf/3D.svg"
import fcbf4d from "../images/4color-bf/4D.svg"
import fcbf5d from "../images/4color-bf/5D.svg"
import fcbf6d from "../images/4color-bf/6D.svg"
import fcbf7d from "../images/4color-bf/7D.svg"
import fcbf8d from "../images/4color-bf/8D.svg"
import fcbf9d from "../images/4color-bf/9D.svg"
import fcbfTd from "../images/4color-bf/TD.svg"
import fcbfJd from "../images/4color-bf/JD.svg"
import fcbfQd from "../images/4color-bf/QD.svg"
import fcbfKd from "../images/4color-bf/KD.svg"
import fcbfAd from "../images/4color-bf/AD.svg"

import fcbf2h from "../images/4color-bf/2H.svg"
import fcbf3h from "../images/4color-bf/3H.svg"
import fcbf4h from "../images/4color-bf/4H.svg"
import fcbf5h from "../images/4color-bf/5H.svg"
import fcbf6h from "../images/4color-bf/6H.svg"
import fcbf7h from "../images/4color-bf/7H.svg"
import fcbf8h from "../images/4color-bf/8H.svg"
import fcbf9h from "../images/4color-bf/9H.svg"
import fcbfTh from "../images/4color-bf/TH.svg"
import fcbfJh from "../images/4color-bf/JH.svg"
import fcbfQh from "../images/4color-bf/QH.svg"
import fcbfKh from "../images/4color-bf/KH.svg"
import fcbfAh from "../images/4color-bf/AH.svg"

import fcbf2s from "../images/4color-bf/2S.svg"
import fcbf3s from "../images/4color-bf/3S.svg"
import fcbf4s from "../images/4color-bf/4S.svg"
import fcbf5s from "../images/4color-bf/5S.svg"
import fcbf6s from "../images/4color-bf/6S.svg"
import fcbf7s from "../images/4color-bf/7S.svg"
import fcbf8s from "../images/4color-bf/8S.svg"
import fcbf9s from "../images/4color-bf/9S.svg"
import fcbfTs from "../images/4color-bf/TS.svg"
import fcbfJs from "../images/4color-bf/JS.svg"
import fcbfQs from "../images/4color-bf/QS.svg"
import fcbfKs from "../images/4color-bf/KS.svg"
import fcbfAs from "../images/4color-bf/AS.svg"

const cards = {
  '2c': fcbf2c,
  '3c': fcbf3c,
  '4c': fcbf4c,
  '5c': fcbf5c,
  '6c': fcbf6c,
  '7c': fcbf7c,
  '8c': fcbf8c,
  '9c': fcbf9c,
  'Tc': fcbfTc,
  'Jc': fcbfJc,
  'Qc': fcbfQc,
  'Kc': fcbfKc,
  'Ac': fcbfAc,

  '2d': fcbf2d,
  '3d': fcbf3d,
  '4d': fcbf4d,
  '5d': fcbf5d,
  '6d': fcbf6d,
  '7d': fcbf7d,
  '8d': fcbf8d,
  '9d': fcbf9d,
  'Td': fcbfTd,
  'Jd': fcbfJd,
  'Qd': fcbfQd,
  'Kd': fcbfKd,
  'Ad': fcbfAd,

  '2h': fcbf2h,
  '3h': fcbf3h,
  '4h': fcbf4h,
  '5h': fcbf5h,
  '6h': fcbf6h,
  '7h': fcbf7h,
  '8h': fcbf8h,
  '9h': fcbf9h,
  'Th': fcbfTh,
  'Jh': fcbfJh,
  'Qh': fcbfQh,
  'Kh': fcbfKh,
  'Ah': fcbfAh,

  '2s': fcbf2s,
  '3s': fcbf3s,
  '4s': fcbf4s,
  '5s': fcbf5s,
  '6s': fcbf6s,
  '7s': fcbf7s,
  '8s': fcbf8s,
  '9s': fcbf9s,
  'Ts': fcbfTs,
  'Js': fcbfJs,
  'Qs': fcbfQs,
  'Ks': fcbfKs,
  'As': fcbfAs,
}

function FcB(props) {
  return (
    <Card {...props} card={cards[props.card]} />
  )
}

export default FcB
