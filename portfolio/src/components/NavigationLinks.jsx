import React from 'react'
import './style/navigationlinks.css';

const NavigationLinks = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item navigation-item">
        <a className="nav-link navigation-link" href="#projeto">Projetos</a>
      </li>
      <li className="nav-item navigation-item">
        <a className="nav-link navigation-link" href="#skill">Skills</a>
      </li>
      <li className="nav-item navigation-item">
        <a className="nav-link navigation-link" href="#sobre">Sobre Mim</a>
      </li>
      <li className="nav-item navigation-item">
        <a className="nav-link navigation-link" href="#contato">Contato</a>
      </li>
    </ul>
  )
}

export default NavigationLinks