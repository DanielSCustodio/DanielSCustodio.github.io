import React from 'react'
import socialNetwork from '../data/socialNetwork';
import './style/socialnetworkitems.css';

const SocialNetworkItems = () => {
  const data = socialNetwork;
  return (

    <section className="text-center card-redesocial">
      { data.map( ( { id, link, image, name } ) => (
        <div key={ id } className="container-redesocial__item">
          <a href={ link } target="_blank" className="container-redesocial__link">
            <img src={ image } alt={ name } className="container-redesocial__img" />
            <p className="container-redesocial__text">{ name }</p>
          </a>
        </div>
      ) ) }
    </section>
  )
}

export default SocialNetworkItems