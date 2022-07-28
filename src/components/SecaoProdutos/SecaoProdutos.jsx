import React from 'react'
import Style from './SecaoProdutos.module.css'
import CardProduto from '../CardProduto/CardProduto'
import { useEffect, useState } from 'react'

const SecaoProdutos = ({nome}) => {
  const [produtos, setProdutos] = useState()
  const [urlNova, setUrlNova] = useState('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

    async function handleRequest() {
      const response = await fetch(urlNova);
      const result = await response.json();
      setUrlNova(result.nextPage);
      console.log(result.nextPage);

      const resposta = result.products
      setProdutos(resposta);
    }

    useEffect(() => {
      handleRequest();
    }, [])

  return (
    <section className={Style.secProdutos}>
      <p>Sua seleção especial</p>
      <div className={Style.cards}>
      {!!produtos && produtos.map((produto) => {
          return (<CardProduto dados={produto} key={produto.id}/>)
        })}
      </div>
      <button onClick={handleRequest
        }>Ver mais</button>
    </section>
  )
}

export default SecaoProdutos