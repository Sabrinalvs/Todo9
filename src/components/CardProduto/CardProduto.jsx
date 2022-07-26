import React from 'react'
import S from './CardProduto.module.css'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

const CardProduto = ({dados}) => {

  return (
    <div className={S.container}>
      <img src={dados.image} alt="" />
      <h3>{dados.name}</h3>
      <small>DE: <span> R${dados.oldPrice}</span></small>
      <p>Por <span>R${dados.price}</span></p>
    </div>
  )
}

export default CardProduto