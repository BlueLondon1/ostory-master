import React from 'react';
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../images/logo_ostory_red-t.png';

// ============ SECTION FOOTER ============

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">
      <Link exact to="/"><img src={logo} alt="logo oStory" /></Link>
      <p><Link className="footer__legal" exact to="/legal">Mentions légales</Link></p>
    </div>
    <div className="footer__blog">
      <h5>Visitez notre blog pour suivre notre actualité !</h5>
      <a className="footer__link" href="/blog">Découvrir le blog oStory</a>
    </div>
    <div className="footer__social">
      <div className="footer__social__text">
        <p>Contactez-nous !</p>
      </div>
      <div className="footer__social__icons">
        <a className="footer__social__icon" href="mailto:contact@story.io"><FA name="envelope-o" tag="i" /></a>
        <a className="footer__social__icon" href="https://twitter.com/ostory8"><FA name="twitter-square" tag="i" /></a>
        <a className="footer__social__icon" href="https://www.facebook.com/OStory-311470323133148"><FA name="facebook-square" tag="i" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
