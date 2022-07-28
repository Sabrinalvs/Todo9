import React from 'react';
import Style from './SecaoCadastro.module.css';
import { useState } from 'react';

const SecaoCadastro = () => {

  const [email, setEmail] = useState('')
  const [cpf, setCPF] = useState('')

  function handleEmail(target){
    setEmail(target.value)
  }

  function validarEmail(){
    if(email.indexOf('@') > 4 && email.indexOf('.com') > email.indexOf('@')){
      console.log('Email válido');
    } else {
      alert('Email inválido')
    }
  }
  function handleCPF(target){
    setCPF(target.value)
  }

  function validarCPF(){
    if(cpf.length != 11){
      alert('CPF inválido')
    }
  }

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
        <input type="email" id='emailCad' className={Style.texto} value={email} onChange={({target})=> handleEmail(target)}/>
        <label for="cpfCad" className={Style.lab}>*CPF:</label>
        <input type="text" id='cpfCad' className={Style.texto} value={cpf} onChange={({target})=> handleCPF(target)}/>
        <div className={Style.lab}>
          <input type="radio" id='sexoMCad'/>
          <label for="sexoMCad" className={Style.lab}>Masculino</label>
          <input type="radio" id='sexoFCad'/>
          <label for="sexoFCad" className={Style.lab}>Feminino</label>
        </div>
        <input type="button" value="Enviar" className={Style.texto} onClick={(event)=>{
          event.preventDefault()
          validarEmail()
          validarCPF()
        }} />
      </form>
    </section>
  )
}

export default SecaoCadastro