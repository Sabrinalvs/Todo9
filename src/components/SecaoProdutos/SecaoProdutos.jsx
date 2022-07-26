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
    <section>
      <p>Sua seleção especial</p>
      <div>
      {!!produtos && produtos.map((produto) => {
          return (<CardProduto dados={produto} />)
        })}
      </div>
    </section>
  )
}

export default SecaoProdutos