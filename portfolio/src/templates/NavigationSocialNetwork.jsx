import React from 'react'
import SocialNetworkItems from './SocialNetworkItems'

const NavigationSocialNetwork = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle " data-toggle="dropdown" id="navDrop" href="#">Redes Sociais</a>
        <div className="dropdown-menu  border-menu-rs bg-purple-degrade"> {/* Inserir css  bg-purple-degrade */ }
          <SocialNetworkItems />
        </div>
      </li>
    </ul >
  )
}

export default NavigationSocialNetwork