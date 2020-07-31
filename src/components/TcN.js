import React from "react"

import Card from "./Card"

// two color normal face
import tc2c from "../images/2color/2C.svg"
import tc3c from "../images/2color/3C.svg"
import tc4c from "../images/2color/4C.svg"
import tc5c from "../images/2color/5C.svg"
import tc6c from "../images/2color/6C.svg"
import tc7c from "../images/2color/7C.svg"
import tc8c from "../images/2color/8C.svg"
import tc9c from "../images/2color/9C.svg"
import tcTc from "../images/2color/TC.svg"
import tcJc from "../images/2color/JC.svg"
import tcQc from "../images/2color/QC.svg"
import tcKc from "../images/2color/KC.svg"
import tcAc from "../images/2color/AC.svg"

import tc2d from "../images/2color/2D.svg"
import tc3d from "../images/2color/3D.svg"
import tc4d from "../images/2color/4D.svg"
import tc5d from "../images/2color/5D.svg"
import tc6d from "../images/2color/6D.svg"
import tc7d from "../images/2color/7D.svg"
import tc8d from "../images/2color/8D.svg"
import tc9d from "../images/2color/9D.svg"
import tcTd from "../images/2color/TD.svg"
import tcJd from "../images/2color/JD.svg"
import tcQd from "../images/2color/QD.svg"
import tcKd from "../images/2color/KD.svg"
import tcAd from "../images/2color/AD.svg"

import tc2h from "../images/2color/2H.svg"
import tc3h from "../images/2color/3H.svg"
import tc4h from "../images/2color/4H.svg"
import tc5h from "../images/2color/5H.svg"
import tc6h from "../images/2color/6H.svg"
import tc7h from "../images/2color/7H.svg"
import tc8h from "../images/2color/8H.svg"
import tc9h from "../images/2color/9H.svg"
import tcTh from "../images/2color/TH.svg"
import tcJh from "../images/2color/JH.svg"
import tcQh from "../images/2color/QH.svg"
import tcKh from "../images/2color/KH.svg"
import tcAh from "../images/2color/AH.svg"

import tc2s from "../images/2color/2S.svg"
import tc3s from "../images/2color/3S.svg"
import tc4s from "../images/2color/4S.svg"
import tc5s from "../images/2color/5S.svg"
import tc6s from "../images/2color/6S.svg"
import tc7s from "../images/2color/7S.svg"
import tc8s from "../images/2color/8S.svg"
import tc9s from "../images/2color/9S.svg"
import tcTs from "../images/2color/TS.svg"
import tcJs from "../images/2color/JS.svg"
import tcQs from "../images/2color/QS.svg"
import tcKs from "../images/2color/KS.svg"
import tcAs from "../images/2color/AS.svg"

const cards = {
  '2c': tc2c,
  '3c': tc3c,
  '4c': tc4c,
  '5c': tc5c,
  '6c': tc6c,
  '7c': tc7c,
  '8c': tc8c,
  '9c': tc9c,
  'Tc': tcTc,
  'Jc': tcJc,
  'Qc': tcQc,
  'Kc': tcKc,
  'Ac': tcAc,

  '2d': tc2d,
  '3d': tc3d,
  '4d': tc4d,
  '5d': tc5d,
  '6d': tc6d,
  '7d': tc7d,
  '8d': tc8d,
  '9d': tc9d,
  'Td': tcTd,
  'Jd': tcJd,
  'Qd': tcQd,
  'Kd': tcKd,
  'Ad': tcAd,

  '2h': tc2h,
  '3h': tc3h,
  '4h': tc4h,
  '5h': tc5h,
  '6h': tc6h,
  '7h': tc7h,
  '8h': tc8h,
  '9h': tc9h,
  'Th': tcTh,
  'Jh': tcJh,
  'Qh': tcQh,
  'Kh': tcKh,
  'Ah': tcAh,

  '2s': tc2s,
  '3s': tc3s,
  '4s': tc4s,
  '5s': tc5s,
  '6s': tc6s,
  '7s': tc7s,
  '8s': tc8s,
  '9s': tc9s,
  'Ts': tcTs,
  'Js': tcJs,
  'Qs': tcQs,
  'Ks': tcKs,
  'As': tcAs,
}

function TcN(props) {
  return (
    <Card {...props} card={cards[props.card]} />
  )
}

export default TcN
