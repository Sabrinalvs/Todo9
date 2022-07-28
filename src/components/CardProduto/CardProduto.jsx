import React from 'react'
import S from './CardProduto.module.css'
import { useEffect, useState } from 'react'

const CardProduto = ({dados}) => {

  return (
    <div className={S.container}>
      <div>
        <img src={dados.image} alt="" />
      </div>
      <div>
        <p className={S.nome}>{dados.name}</p>
        <small>DE: <span> R${dados.oldPrice}</span></small>
        <p className={S.preco}>  Por <span>R${dados.price}</span></p>
        <button>Comprar</button>
      </div>
    </div>
  )
}

export default CardProduto