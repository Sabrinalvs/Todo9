import React from 'react'
import Style from './SecaoCompartilhar.module.css'

const SecaoCompartilhar = () => {
  return (
    <section className={Style.secComp}>
      <h3>Compartilhe a novidade</h3>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <div className={Style.inp}>
        <div className={Style.inp2}>
          <label for="nomeAmigo">Nome do seu amigo:</label>
          <input type="text" id='nomeAmigo' className={Style.caixa} />
        </div>
        <div className={Style.inp2}>
          <label for="emailComp">E-mail:</label>
          <input type="text" id='emailComp' className={Style.caixa} />
        </div>
      </div>
      <input type="button" value="Enviar agora" className={Style.caixa2}/>
    </section>
  )
}

export default SecaoCompartilhar