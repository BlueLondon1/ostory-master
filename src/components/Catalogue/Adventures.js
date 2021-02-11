// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local

const Entities = require('html-entities').AllHtmlEntities;

// == Composant
const Adventures = ({
  adventuresDatas,
  universesDatas,
  genresDatas,
  searchbarInput,
  universesFiltered,
  genresFiltered,
}) => {
  const dataFiltered = adventuresDatas.filter((starter) => {
    if (starter.title.rendered.trim().toLowerCase().search(searchbarInput.toLowerCase()) !== -1) {
      return starter;
    }
  });

  // Pour une aventure
  const filtered = dataFiltered.filter((adventure) => {
    const universeOk = adventure.universe.filter((oneUniverseFromAdventure) => {
      const oneUnivOk = universesFiltered.filter((universe) => {
        if (parseInt(universe) === oneUniverseFromAdventure) {
          return universe;
        }
      });
      if (oneUnivOk.length > 0) {
        return true;
      }
    });
    if ((universeOk.length * 2) >= universesFiltered.length) {
      const genreOk = adventure.genre.filter((oneGenreFromAdventure) => {
        const oneGenreOk = genresFiltered.filter((genre) => {
          if (parseInt(genre) === oneGenreFromAdventure) {
            return genre;
          }
        });
        if (oneGenreOk.length > 0) {
          return true;
        }
      });
      if ((genreOk.length * 2) >= genresFiltered.length) {
        return true;
      }
    }
  });

  const dataToShow = universesFiltered.length > 0 ? filtered : genresFiltered.length > 0 ? filtered : dataFiltered;

  return (

    <ul className="adventures">
      {
        dataToShow.map((adventure) => {
          const style = {
            background: `url(${adventure.thumbnails})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          };
          const entities = new Entities();
          return (
            <li key={adventure.id} style={style} className="adventures__adventure">
              <div className="adventures__adventure__resume">
                {adventure.meta.resume}
              </div>
              <div className="adventures__adventure__description">
                <h2 className="adventures__adventure__description__title "><NavLink className="adventures__adventure__description__title__link" to={`/adventures/adventure/${adventure.id}`}>{entities.decode(adventure.title.rendered)}</NavLink></h2>
                <div className="adventures__adventure__description__tags d-flex flex-wrap">
                  {
                    (adventure.universe).map(oneAdventure => (
                      <span key={oneAdventure} className="adventures__adventure__description__tags__tag">
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
                      <span key={oneAdventure} className="adventures__adventure__description__tags__tag">
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
              </div>
            </li>
          );
        })}
    </ul>
  );
};

Adventures.propTypes = {
  adventuresDatas: PropTypes.array.isRequired,
  universesDatas: PropTypes.array.isRequired,
  genresDatas: PropTypes.array.isRequired,
  searchbarInput: PropTypes.string.isRequired,
  universesFiltered: PropTypes.array.isRequired,
  genresFiltered: PropTypes.array.isRequired,
};
// == Export
export default Adventures;
