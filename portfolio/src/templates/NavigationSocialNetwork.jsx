import React from 'react'
import SocialNetworkItems from './SocialNetworkItems'
import './style/navigationsocialnetwork.css';

const NavigationSocialNetwork = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle social-network-text"
          data-toggle="dropdown" id="navDrop" href="#">Redes Sociais</a>
        <div className="dropdown-menu  container-social-network bg-purple-degrade">
          <SocialNetworkItems />
        </div>
      </li>
    </ul >
  )
}

export default NavigationSocialNetwork