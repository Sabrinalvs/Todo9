import React from 'react'
import Style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.forma}>
        <p>Linx Impulse</p>
        <p>2019</p>
      </div>
    </footer>
  )
}

export default Footer