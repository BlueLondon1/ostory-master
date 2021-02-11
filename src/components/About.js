import React from 'react';
import FA from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

const About = () => (
  <main className="about">
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src="/src/images/clement.png" alt="" />
        <div className="card__links">
          <a className="card__link" href="https://github.com/glukor"><FA name="github" tag="i" /></a>
          <a className="card__link" href="mailto:clement.franch.g@gmail.com"><FA name="envelope-o" tag="i" /></a>
        </div>
      </div>

      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#7EA5BF" />
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
      </svg>

      <div className="card__content">
        <h1 className="card__title">Clément Franch</h1>
        <p className="card__description">Je suis passionné par le Web et les nouvelles technologies. Je suis attiré autant par le Front-End que par le Back-End, et suis curieux de découvrir et d'apprendre autant que je le peux sur le développement Web !</p>
      </div>
    </div>

    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src="src/images/nicolas.png" alt="" />
        <div className="card__links">
          <a className="card__link" href="https://github.com/bluelondon1"><FA name="github" tag="i" /></a>
          <a className="card__link" href="mailto:talbotdfn@gmail.com"><FA name="envelope-o" tag="i" /></a>
        </div>
      </div>

      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#7EA5BF" />
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
      </svg>

      <div className="card__content">
        <h1 className="card__title">Nicolas Talbot</h1>
        <p className="card__description">Moi j'veux pas faire ma raclette mais j'aime surtout le back-end, même si le front m'attire lui aussi de plus en plus, je canalise mon énergie de développeur junior pour rester du coté obscur de la force.</p>
      </div>
    </div>

    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src="src/images/prescillia.png" alt="" />
        <div className="card__links">
          <a className="card__link" href="https://github.com/PrescilliaDSD"><FA name="github" tag="i" /></a>
          <a className="card__link" href="mailto:dossantosdias.prescillia@gmail.com"><FA name="envelope-o" tag="i" /></a>
        </div>
      </div>

      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#7EA5BF" />
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
      </svg>

      <div className="card__content">
        <h1 className="card__title">Prescillia Dos Santos</h1>
        <p className="card__description">Issue d'une formation dans le commerce et les métiers du livre et ayant terminé ma formation de développeuse web et web mobile, j'améliore chaque jour mes compétences en tant que développeuse front-end avec une spécialité React.</p>
      </div>
    </div>
  </main>
);

export default About;
