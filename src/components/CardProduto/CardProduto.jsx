import React from 'react'
import S from './CardProduto.module.css'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

const CardProduto = ({dados}) => {
    const {id, nome, foto, precoAntigo, preco, descricao} = dados

  return (
    <div className={S.container}>
      <img src={foto} alt="" />
      <h3>{nome}</h3>
      <small>DE: <span> R${precoAntigo}</span></small>
      <p>Por <span>R${preco}</span></p>
    </div>
  )
}

export default CardProduto