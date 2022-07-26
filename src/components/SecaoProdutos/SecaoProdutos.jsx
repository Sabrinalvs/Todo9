import React from 'react'
import Style from './SecaoProdutos.module.css'
import CardProduto from '../CardProduto/CardProduto'
import { useEffect, useState } from 'react'
// import { listaProdutos } from '../../data/produtos'

const SecaoProdutos = ({nome}) => {
  const [req, setReq] = useState()

  let resultado = [];

    async function apiRequest() {
      const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`);
      const result = await response.json();
      setReq(result);
      resultado = result.products
      console.log(resultado);
    }

    useEffect(() => {
      apiRequest()
    }, [])

    function mostrarProdutos() {
      for (let i = 0; i < resultado.length; i ++){
        console.log(produto[i]);
        return (<CardProduto dados={produto[i]} key={produto.id} />)
      }
    }

  return (
    <section>
      <p>Sua seleção especial</p>
      <div>
      {mostrarProdutos()}
      </div>
    </section>
  )
}

export default SecaoProdutos