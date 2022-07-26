import React from 'react'
import Style from './Header.module.css'

const Header = () => {
  return (
    <header className={Style.header}>
      <h2>uma seleção de produtos para você</h2>
      <h1>especial para você</h1>
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      <nav className={Style.naveg}>
        <input type="button" className={Style.botao} value="Conheça a Linx" />
        <input type="button" className={Style.botao} value="Ajude o algoritmo" />
        <input type="button" className={Style.botao} value="Seus produtos" />
        <input type="button" className={Style.botao} value="Compartilhe" />
      </nav>
    </header>
  )
}

export default Header