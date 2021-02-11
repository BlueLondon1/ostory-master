// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const FilterDesktop = ({
  universesDatas,
  genresDatas,
  addUniverseToFilter,
  removeUniverseFromFilter,
  addGenreToFilter,
  removeGenreFromFilter,
}) => {
  const filterByUniverses = (event) => {
    const universeId = event.target.id;
    const isChecked = event.target.checked;
    if (isChecked) {
      addUniverseToFilter(universeId);
    }
    else {
      removeUniverseFromFilter(universeId);
    }
  };

  const filterByGenres = (event) => {
    const genreId = event.target.id;
    const isChecked = event.target.checked;
    if (isChecked) {
      addGenreToFilter(genreId);
    }
    else {
      removeGenreFromFilter(genreId);
    }
  };

  return (
    <div className="filter-desktop">
      <h3 className="filter-desktop__title">Affinez votre recherche</h3>
      <ul className="filter-desktop__tags">
        {
          universesDatas.map(universe => (
            <li key={universe.name} className="filter-desktop__tags__tag"><label htmlFor={universe.name}><input onChange={filterByUniverses} className="filter-desktop__tags__tag__checkbox" type="checkbox" id={universe.id} /> {universe.name}</label></li>
          ))
        }
        {
          genresDatas.map(genre => (
            <li key={genre.name} className="filter-desktop__tags__tag"><label htmlFor={genre.name}><input onChange={filterByGenres} className="filter-desktop__tags__tag__checkbox" type="checkbox" id={genre.id} /> {genre.name}</label></li>
          ))
        }
      </ul>
    </div>
  );
};

FilterDesktop.propTypes = {
  universesDatas: PropTypes.array.isRequired,
  genresDatas: PropTypes.array.isRequired,
  addUniverseToFilter: PropTypes.func.isRequired,
  removeUniverseFromFilter: PropTypes.func.isRequired,
  addGenreToFilter: PropTypes.func.isRequired,
  removeGenreFromFilter: PropTypes.func.isRequired,
};

// == Export
export default FilterDesktop;
