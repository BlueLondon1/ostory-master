// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const FilterMobile = ({
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
    <div className="filter">
      <input className="filter__input" id="filter-menu" type="checkbox" />
      <label className="filter__label" htmlFor="filter-menu">
        Filtrer
      </label>
      <div className="filter__div">

        <ul className="filter__div__list">
          {
            universesDatas.map(universe => (
              <li key={universe.name} className="filter__div__list__item"><label className="tag-label" htmlFor="tag"><input onClick={filterByUniverses} type="checkbox" id={universe.id} /> {universe.name}</label></li>
            ))
          }
          {
            genresDatas.map(genre => (
              <li key={genre.name} className="filter__div__list__item"><input onClick={filterByGenres} type="checkbox" id={genre.id} /><label className="tag-label" htmlFor="category">{genre.name}</label></li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

FilterMobile.propTypes = {
  universesDatas: PropTypes.array.isRequired,
  genresDatas: PropTypes.array.isRequired,
  addUniverseToFilter: PropTypes.func.isRequired,
  removeUniverseFromFilter: PropTypes.func.isRequired,
  addGenreToFilter: PropTypes.func.isRequired,
  removeGenreFromFilter: PropTypes.func.isRequired,
}


// == Export
export default FilterMobile;
