import React from "react"

import Card from "./Card"

// two color big face
import tcbf2c from "../images/2color-bf/2C.svg"
import tcbf3c from "../images/2color-bf/3C.svg"
import tcbf4c from "../images/2color-bf/4C.svg"
import tcbf5c from "../images/2color-bf/5C.svg"
import tcbf6c from "../images/2color-bf/6C.svg"
import tcbf7c from "../images/2color-bf/7C.svg"
import tcbf8c from "../images/2color-bf/8C.svg"
import tcbf9c from "../images/2color-bf/9C.svg"
import tcbfTc from "../images/2color-bf/TC.svg"
import tcbfJc from "../images/2color-bf/JC.svg"
import tcbfQc from "../images/2color-bf/QC.svg"
import tcbfKc from "../images/2color-bf/KC.svg"
import tcbfAc from "../images/2color-bf/AC.svg"

import tcbf2d from "../images/2color-bf/2D.svg"
import tcbf3d from "../images/2color-bf/3D.svg"
import tcbf4d from "../images/2color-bf/4D.svg"
import tcbf5d from "../images/2color-bf/5D.svg"
import tcbf6d from "../images/2color-bf/6D.svg"
import tcbf7d from "../images/2color-bf/7D.svg"
import tcbf8d from "../images/2color-bf/8D.svg"
import tcbf9d from "../images/2color-bf/9D.svg"
import tcbfTd from "../images/2color-bf/TD.svg"
import tcbfJd from "../images/2color-bf/JD.svg"
import tcbfQd from "../images/2color-bf/QD.svg"
import tcbfKd from "../images/2color-bf/KD.svg"
import tcbfAd from "../images/2color-bf/AD.svg"

import tcbf2h from "../images/2color-bf/2H.svg"
import tcbf3h from "../images/2color-bf/3H.svg"
import tcbf4h from "../images/2color-bf/4H.svg"
import tcbf5h from "../images/2color-bf/5H.svg"
import tcbf6h from "../images/2color-bf/6H.svg"
import tcbf7h from "../images/2color-bf/7H.svg"
import tcbf8h from "../images/2color-bf/8H.svg"
import tcbf9h from "../images/2color-bf/9H.svg"
import tcbfTh from "../images/2color-bf/TH.svg"
import tcbfJh from "../images/2color-bf/JH.svg"
import tcbfQh from "../images/2color-bf/QH.svg"
import tcbfKh from "../images/2color-bf/KH.svg"
import tcbfAh from "../images/2color-bf/AH.svg"

import tcbf2s from "../images/2color-bf/2S.svg"
import tcbf3s from "../images/2color-bf/3S.svg"
import tcbf4s from "../images/2color-bf/4S.svg"
import tcbf5s from "../images/2color-bf/5S.svg"
import tcbf6s from "../images/2color-bf/6S.svg"
import tcbf7s from "../images/2color-bf/7S.svg"
import tcbf8s from "../images/2color-bf/8S.svg"
import tcbf9s from "../images/2color-bf/9S.svg"
import tcbfTs from "../images/2color-bf/TS.svg"
import tcbfJs from "../images/2color-bf/JS.svg"
import tcbfQs from "../images/2color-bf/QS.svg"
import tcbfKs from "../images/2color-bf/KS.svg"
import tcbfAs from "../images/2color-bf/AS.svg"

const cards = {
  '2c': tcbf2c,
  '3c': tcbf3c,
  '4c': tcbf4c,
  '5c': tcbf5c,
  '6c': tcbf6c,
  '7c': tcbf7c,
  '8c': tcbf8c,
  '9c': tcbf9c,
  'Tc': tcbfTc,
  'Jc': tcbfJc,
  'Qc': tcbfQc,
  'Kc': tcbfKc,
  'Ac': tcbfAc,

  '2d': tcbf2d,
  '3d': tcbf3d,
  '4d': tcbf4d,
  '5d': tcbf5d,
  '6d': tcbf6d,
  '7d': tcbf7d,
  '8d': tcbf8d,
  '9d': tcbf9d,
  'Td': tcbfTd,
  'Jd': tcbfJd,
  'Qd': tcbfQd,
  'Kd': tcbfKd,
  'Ad': tcbfAd,

  '2h': tcbf2h,
  '3h': tcbf3h,
  '4h': tcbf4h,
  '5h': tcbf5h,
  '6h': tcbf6h,
  '7h': tcbf7h,
  '8h': tcbf8h,
  '9h': tcbf9h,
  'Th': tcbfTh,
  'Jh': tcbfJh,
  'Qh': tcbfQh,
  'Kh': tcbfKh,
  'Ah': tcbfAh,

  '2s': tcbf2s,
  '3s': tcbf3s,
  '4s': tcbf4s,
  '5s': tcbf5s,
  '6s': tcbf6s,
  '7s': tcbf7s,
  '8s': tcbf8s,
  '9s': tcbf9s,
  'Ts': tcbfTs,
  'Js': tcbfJs,
  'Qs': tcbfQs,
  'Ks': tcbfKs,
  'As': tcbfAs,
}

function TcB(props) {
  return (
    <Card {...props} card={cards[props.card]} />
  )
}

export default TcB
