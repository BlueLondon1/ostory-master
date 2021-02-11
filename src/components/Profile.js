// == Import : npm
import React from 'react';

// == Import : local


// == Composant
class Profile extends React.Component {
  handleSlide = (event) => {
    let target;
    // we want to slides adventures with left and right arrows

    // if we click on arrows on the adventures-to-continue slide,
    // the adventures-to-continue slide will move.
    if ((event.currentTarget).classList.contains('adventures__to-continue__slide')) {
      target = document.querySelector('.adventures__to-continue');
      // then, if we click on a left arrow, the slide will move to the left.
      if ((event.currentTarget).classList.contains('slide-to-left')) {
        target.scrollBy({
          top: 0,
          left: -target.offsetWidth,
          behavior: 'smooth',
        });
      }
      // otherwise, if we click on a right arrow, the slide will move to the right.
      else {
        target.scrollBy({
          top: 0,
          left: target.offsetWidth,
          behavior: 'smooth',
        });
      }
    }
    // if we click on arrows on the adventures-finished slide,
    // the adventures-finished slide will move.
    else {
      target = document.querySelector('.adventures__finished');
      // then, if we click on a left arrow, the slide will move to the left.
      if ((event.currentTarget).classList.contains('slide-to-left')) {
        target.scrollBy({
          top: 0,
          left: -target.offsetWidth,
          behavior: 'smooth',
        });
      }
      // otherwise, if we click on a right arrow, the slide will move to the right.
      else {
        target.scrollBy({
          top: 0,
          left: target.offsetWidth,
          behavior: 'smooth',
        });
      }
    }
  }

  render() {
    return (
      <main className="profile">
        <h1 className="profile__title">Bienvenue, aventurière</h1>
        <div className="profile__body">
          <aside className="profile__user">
            <div className="profile__user__identity">
              <p>Primith</p>
              <img src="/src/images/primith.png" alt="primith" />
            </div>
            <div className="profile__user__infos">
              <ul>
                <li className="profile__user__infos__item">Inscription : 21.06.2019</li>
                <li className="profile__user__infos__item">Anniversaire : 01.01.1970</li>
                <li className="profile__user__infos__item">Email : primith@ostory.io</li>
              </ul>
              <button className="profile__user__infos__button" type="button">Modifier profil</button>
              <p>Nombre d'aventures terminées : 4</p>
            </div>
          </aside>
          <div className="profile__stories">
            <section className="adventures">
              <h2>Histoires en cours</h2>
              <div className="adventures__slides">
                <button type="button" className="adventures__slide-button slide-to-left adventures__to-continue__slide" onClick={this.handleSlide}>&#10094;</button>
                <ul className="adventures__list adventures__to-continue">
                  <li><img className="adventures__item" src="/src/images/dark-castle.jpg" alt="dark-castle" /></li>
                  <li><img className="adventures__item" src="/src/images/fight-dragon.jpg" alt="fight-dragon" /></li>
                  <li><img className="adventures__item" src="/src/images/space.jpg" alt="space" /></li>
                  <li><img className="adventures__item" src="/src/images/test.jpg" alt="test" /></li>
                  <li><img className="adventures__item" src="/src/images/night-sky.jpg" alt="night-sky" /></li>
                </ul>
                <button type="button" className="adventures__slide-button slide-to-right adventures__to-continue__slide" onClick={this.handleSlide}>&#10095;</button>
              </div>
            </section>
            <section className="adventures">
              <h2>Parcourez-les de nouveau</h2>
              <div className="adventures__slides">
                <button type="button" className="adventures__slide-button slide-to-left adventures__finished__slide" onClick={this.handleSlide}>&#10094;</button>
                <ul className="adventures__list adventures__finished">
                  <li><img className="adventures__item" src="/src/images/dark-castle.jpg" alt="dark-castle" /></li>
                  <li><img className="adventures__item" src="/src/images/fight-dragon.jpg" alt="fight-dragon" /></li>
                  <li><img className="adventures__item" src="/src/images/space.jpg" alt="space" /></li>
                  <li><img className="adventures__item" src="/src/images/test.jpg" alt="test" /></li>
                  <li><img className="adventures__item" src="/src/images/night-sky.jpg" alt="night-sky" /></li>
                </ul>
                <button type="button" className="adventures__slide-button slide-to-right adventures__finished__slide" onClick={this.handleSlide}>&#10095;</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
// == Export
export default Profile;
