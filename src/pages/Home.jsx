import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SecaoCadastro from '../components/SecaoCadastro/SecaoCadastro'
import SecaoCompartilhar from '../components/SecaoCompartilhar/SecaoCompartilhar'
import SecaoProdutos from '../components/SecaoProdutos/SecaoProdutos'

const Home = () => {
  return (
    <main>
        <Header />
        <SecaoCadastro />
        <SecaoProdutos />
        <SecaoCompartilhar />
        <Footer />
    </main>
  )
}

export default Home