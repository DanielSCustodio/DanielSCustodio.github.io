import React from 'react'
import logo from '../img/logo-site/logo-site.png';
import './style/logomenu.css';
const LogoMenu = () => {
  return (
    <section className="container-logo">
      <a href="#">
        <img src={ logo } className="container-logo__item" alt="Logo Daniel Custódio" />
      </a>
    </section>
  )
}

export default LogoMenu