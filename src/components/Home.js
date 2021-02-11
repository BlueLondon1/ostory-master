import { Link } from 'react-router-dom';
import React from 'react';

import Dragon from '../images/fight-dragon.jpg';
import Space from '../images/space.jpg';
import Castle from '../images/dark-castle.jpg';
import Logo from '../images/logo-red.png';



const Home = () =>
  (
    <div id="guest" className="wrapper">


      {/* ================= SECTION BANNER ================= */}

      <section className="banner">
        <div className="intro">
          <h1 className="intro__logo"><img src={Logo} alt="logo" /></h1>
          <p className="intro__content-1">
              Prends le contrôle de ton
          </p>
          <p className="intro__content-2">
              aventure
          </p>
        </div>
      </section>


      {/* ================= SECTION PRESENTATION ================= */}

      <section className="presentation">
        <div className="presentation__text">
          <p className="presentation__text__content">Il est loin le temps où tu restais passif devant ton histoire :</p>
          <p className="presentation__text__content">à présent vis ton aventure au rythme de tes choix !</p>
        </div>

        <div className="presentation__img-box">
          <div className="presentation__img-box__boxes">
            <img src={Space} alt="" className="presentation__img-box__boxes__img" />
            <h3 className="presentation__img-box__boxes__title">Explore des univers</h3>
            <h4 className="presentation__img-box__boxes__text"><Link exact to="/adventures">inconnus</Link></h4>
          </div>

          <div className="presentation__img-box__boxes">
            <img src={Castle} alt="" className="presentation__img-box__boxes__img" />
            <h3 className="presentation__img-box__boxes__title">Choisis une</h3>
            <h4 className="presentation__img-box__boxes__text"><Link exact to="/adventures">aventure</Link></h4>
          </div>

          <div className="presentation__img-box__boxes">
            <img src={Dragon} alt="" className="presentation__img-box__boxes__img" />
            <h3 className="presentation__img-box__boxes__title">et enfin...</h3>
            <h4 className="presentation__img-box__boxes__text"><Link exact to="/signup">lance-toi !</Link></h4>
          </div>
        </div>
      </section>
    </div>

   
 
    // 

    // 

    // 
  
  );

export default Home;
