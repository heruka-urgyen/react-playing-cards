import React from "react"

import Card from "./Card"

// four color
import fc2c from "../images/4color/2C.svg"
import fc3c from "../images/4color/3C.svg"
import fc4c from "../images/4color/4C.svg"
import fc5c from "../images/4color/5C.svg"
import fc6c from "../images/4color/6C.svg"
import fc7c from "../images/4color/7C.svg"
import fc8c from "../images/4color/8C.svg"
import fc9c from "../images/4color/9C.svg"
import fcTc from "../images/4color/TC.svg"
import fcJc from "../images/4color/JC.svg"
import fcQc from "../images/4color/QC.svg"
import fcKc from "../images/4color/KC.svg"
import fcAc from "../images/4color/AC.svg"

import fc2d from "../images/4color/2D.svg"
import fc3d from "../images/4color/3D.svg"
import fc4d from "../images/4color/4D.svg"
import fc5d from "../images/4color/5D.svg"
import fc6d from "../images/4color/6D.svg"
import fc7d from "../images/4color/7D.svg"
import fc8d from "../images/4color/8D.svg"
import fc9d from "../images/4color/9D.svg"
import fcTd from "../images/4color/TD.svg"
import fcJd from "../images/4color/JD.svg"
import fcQd from "../images/4color/QD.svg"
import fcKd from "../images/4color/KD.svg"
import fcAd from "../images/4color/AD.svg"

import fc2h from "../images/4color/2H.svg"
import fc3h from "../images/4color/3H.svg"
import fc4h from "../images/4color/4H.svg"
import fc5h from "../images/4color/5H.svg"
import fc6h from "../images/4color/6H.svg"
import fc7h from "../images/4color/7H.svg"
import fc8h from "../images/4color/8H.svg"
import fc9h from "../images/4color/9H.svg"
import fcTh from "../images/4color/TH.svg"
import fcJh from "../images/4color/JH.svg"
import fcQh from "../images/4color/QH.svg"
import fcKh from "../images/4color/KH.svg"
import fcAh from "../images/4color/AH.svg"

import fc2s from "../images/4color/2S.svg"
import fc3s from "../images/4color/3S.svg"
import fc4s from "../images/4color/4S.svg"
import fc5s from "../images/4color/5S.svg"
import fc6s from "../images/4color/6S.svg"
import fc7s from "../images/4color/7S.svg"
import fc8s from "../images/4color/8S.svg"
import fc9s from "../images/4color/9S.svg"
import fcTs from "../images/4color/TS.svg"
import fcJs from "../images/4color/JS.svg"
import fcQs from "../images/4color/QS.svg"
import fcKs from "../images/4color/KS.svg"
import fcAs from "../images/4color/AS.svg"

const cards = {
  '2c': fc2c,
  '3c': fc3c,
  '4c': fc4c,
  '5c': fc5c,
  '6c': fc6c,
  '7c': fc7c,
  '8c': fc8c,
  '9c': fc9c,
  'Tc': fcTc,
  'Jc': fcJc,
  'Qc': fcQc,
  'Kc': fcKc,
  'Ac': fcAc,

  '2d': fc2d,
  '3d': fc3d,
  '4d': fc4d,
  '5d': fc5d,
  '6d': fc6d,
  '7d': fc7d,
  '8d': fc8d,
  '9d': fc9d,
  'Td': fcTd,
  'Jd': fcJd,
  'Qd': fcQd,
  'Kd': fcKd,
  'Ad': fcAd,

  '2h': fc2h,
  '3h': fc3h,
  '4h': fc4h,
  '5h': fc5h,
  '6h': fc6h,
  '7h': fc7h,
  '8h': fc8h,
  '9h': fc9h,
  'Th': fcTh,
  'Jh': fcJh,
  'Qh': fcQh,
  'Kh': fcKh,
  'Ah': fcAh,

  '2s': fc2s,
  '3s': fc3s,
  '4s': fc4s,
  '5s': fc5s,
  '6s': fc6s,
  '7s': fc7s,
  '8s': fc8s,
  '9s': fc9s,
  'Ts': fcTs,
  'Js': fcJs,
  'Qs': fcQs,
  'Ks': fcKs,
  'As': fcAs,
}

function FcN(props) {
  return (
    <Card {...props} card={cards[props.card]} />
  )
}

export default FcN
