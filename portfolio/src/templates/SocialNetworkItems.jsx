import React from 'react'
import socialNetwork from '../data/socialNetwork';
import teste from '../img/social-media/facebook.png';
const SocialNetworkItems = () => {
  const data = socialNetwork;
  return (

    <section className="text-center container-redesocial">  {/* Inserir css container-redesocial */ }
      { data.map( ( { id, link, image, name } ) => (
        <div key={ id }>
          <a href={ link } target="_blank">
            <img src={ image } alt={ name } className="img-redesocial" /> {/* Inserir css img-redesocial */ }
            <p className="p-redesocial">{ name }</p> {/* Inserir css p-redesocial */ }
          </a>
        </div>
      ) ) }
    </section>
  )
}

export default SocialNetworkItems