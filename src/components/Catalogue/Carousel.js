// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import FA from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

const Entities = require('html-entities').AllHtmlEntities;

// == Import : local

// == Composant
class Carousel extends React.Component {
  stopCarousel = () => {
    const { startCarousel, pauseCarousel, carouselPause } = this.props;
    if (carouselPause) {
      startCarousel();
      console.log(carouselPause);
    }
    else {
      pauseCarousel();
      console.log(carouselPause);
    }
  }

  render() {
    const {
      adventuresDatas,
      universesDatas,
      genresDatas,
      carouselPause,
      carouselIcon,
    } = this.props;

    const cssClassNames = classNames('slider__slides', {
      pause: carouselPause,
    });

    return (
      <div className="slider">
        <FA onClick={this.stopCarousel} className="slider__icon" title={carouselIcon} name={carouselIcon} tag="i" />
        <div className={cssClassNames}>
          {
              adventuresDatas.map((adventure, index) => {
                const style = {
                  background: `url(${adventure.thumbnails})`,
                  backgroundSize: 'cover',
                };
                const entities = new Entities();
                if (index < 3) {
                  return (
                    <div key={adventure.id} style={style} className="slider__slides__slide">
                      <div className="slider__slides__slide__description">
                        <h2 className="slider__slides__slide__description__title">{ entities.decode(adventure.title.rendered) }</h2>
                        <div className="slider__slides__slide__description__tags">
                          {
                            (adventure.universe).map(oneAdventure => (
                              <span className="slider__slides__slide__description__tags__tag" key={oneAdventure}>
                                {
                                  universesDatas.map((universe) => {
                                    if (universe.id === oneAdventure) {
                                      return universe.name;
                                    }
                                  })
                                }
                              </span>
                            ))
                          }
                          {
                            (adventure.genre).map(oneAdventure => (
                              <span className="slider__slides__slide__description__tags__tag" key={oneAdventure}>
                                {
                                  genresDatas.map((genre) => {
                                    if (genre.id === oneAdventure) {
                                      return genre.name;
                                    }
                                  })
                                }
                              </span>
                            ))
                          }
                        </div>
                        <p className="slider__slides__slide__description__resume">{ adventure.meta.resume }</p>
                        <div className="slider__slides__slide__description__learn-more"><Link to={`/adventures/adventure/${adventure.id}`}>En savoir plus</Link></div>
                      </div>
                    </div>
                  );
                }
              })
            }
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  // array
  adventuresDatas: PropTypes.array.isRequired,
  universesDatas: PropTypes.array.isRequired,
  genresDatas: PropTypes.array.isRequired,

  // func
  pauseCarousel: PropTypes.func.isRequired,
  startCarousel: PropTypes.func.isRequired,

  // bool
  carouselPause: PropTypes.bool.isRequired,

  // string
  carouselIcon: PropTypes.string.isRequired,
};


// == Export
export default Carousel;
