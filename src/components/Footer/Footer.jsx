import React from 'react'
import Style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.forma}>
        <p className={Style.sk}>Linx Impulse</p>
        <p className={Style.sk}>2019</p>
      </div>
    </footer>
  )
}

export default Footer