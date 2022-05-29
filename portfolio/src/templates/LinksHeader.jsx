import React from 'react'
import NavigationLinks from '../components/NavigationLinks'
import NavigationSocialNetwork from './NavigationSocialNetwork'

const LinksHeader = () => {
  return (
    <section className="collapse navbar-collapse" id="navbarSite">
      <NavigationLinks />
      <NavigationSocialNetwork />
    </section>
  )
}

export default LinksHeader