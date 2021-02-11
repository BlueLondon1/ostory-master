import React from 'react';
import { NavLink } from 'react-router-dom';




const NotFound = () => (

  <section className="banner404 d-flex flex-column justify-content-center">
    <div className="intro">
      <h1 className="intro__404 text-left">404</h1>
    </div>
    <p className="intro__content404 text-left">Cette histoire n'a pas encore été écrite...</p>
    <div className="action-bar intro__link404 text-left">
      <NavLink exact to="/">Retour à l'accueil</NavLink>
    </div>
  </section>
);

export default NotFound;
