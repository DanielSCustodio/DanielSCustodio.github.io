import React from "react";
import myImage from '../img/photo/foto-site.png';
import github from '../img/icon/github.png';
import linkedin from '../img/icon/linkedin.png';
import wakatime from '../img/icon/wakatimee.png';
import './style/banner.css';

const Banner = () => {
  return (
    <section className="text-center spacing-info container-banner">
      <img className="container-banner__photo" src={ myImage } />
      <section>
        <h1 className="jumbotron-heading container-banner__title">Daniel Custódio</h1>
        <p class="lead text-muted">Desenvolvedor full stack, formado em Análise e Desenvolvimento de Sistemas</p>
        <a href="#contato" class="btn btn-outline-light my-2 container-banner__btn">Contato</a>
        <nav className="container-banner__list-icons">
          <a href="https://github.com/DanielSCustodio" target="_blank">
            <img class="container-banner__itens-icons" src={ github } />
          </a>
          <a href="https://www.linkedin.com/in/danielsilvacustodio/ " target="_blank">
            <img class="container-banner__itens-icons" src={ linkedin } />
          </a>
          <a href="https://wakatime.com/@Custodio" target="_blank">
            <img class="container-banner__itens-icons" src={ wakatime } />
          </a>
        </nav>
      </section>
    </section>
  );
};

export default Banner;
