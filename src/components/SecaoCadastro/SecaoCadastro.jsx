import React from 'react'
import Style from './SecaoCadastro.module.css'

const SecaoCadastro = () => {
  return (
    <section className={Style.secCadastro}>
      <div className={Style.descricao}>
        <h3>Ajude o algoritmo a ser mais certeiro</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tenetur veritatis porro illo odio ullam culpa obcaecati quas id molestias esse animi, minima corrupti totam ea modi est blanditiis et.</p>
      </div>
      <form className={Style.form}>
        <label for="nomeCad" className={Style.lab}>*Seu nome:</label>
        <input type="text" id='nomeCad' className={Style.texto}/>
        <label for="emailCad" className={Style.lab}>*Seu Email:</label>
        <input type="email" id='emailCad' className={Style.texto}/>
        <label for="cpfCad" className={Style.lab}>*CPF:</label>
        <input type="text" id='cpfCad' className={Style.texto} />
        <div className={Style.lab}>
          <input type="radio" id='sexoMCad'/>
          <label for="sexoMCad" className={Style.lab}>Masculino</label>
          <input type="radio" id='sexoFCad'/>
          <label for="sexoFCad" className={Style.lab}>Feminino</label>
        </div>
        <input type="button" value="Enviar" className={Style.texto} />
      </form>
    </section>
  )
}

export default SecaoCadastro