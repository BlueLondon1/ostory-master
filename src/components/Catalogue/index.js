// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

import Carousel from 'src/components/Catalogue/Carousel';
import FilterDesktop from 'src/components/Catalogue/FilterDesktop';
import FilterMobile from 'src/components/Catalogue/FilterMobile';
import SearchBar from 'src/components/Catalogue/SearchBar';
import Adventures from 'src/components/Catalogue/Adventures';

// == Composant
class Catalogue extends React.Component {
  componentDidMount = () => {
    // fetch datas from API
    const { fetchAdventures, fetchUniverses, fetchGenres } = this.props;
    fetchAdventures();
    fetchUniverses();
    fetchGenres();
  }

  componentWillUnmount = () => {
    const { emptyFilters } = this.props;
    emptyFilters();
  }

  render() {
    const {
      adventuresDatas,
      adventureSearchbarInput,
      searchbarInput,
      universesDatas,
      genresDatas,
      addUniverseToFilter,
      removeUniverseFromFilter,
      universesFiltered,
      addGenreToFilter,
      removeGenreFromFilter,
      genresFiltered,
      deleteInputValue,
      pauseCarousel,
      startCarousel,
      carouselPause,
      carouselIcon,
    } = this.props;
    return (
      <main className="catalogue">
        {/* ======== SECTION CAROUSEL & FILTER ON DESKTOP ======== */}
        <section className="catalogue__left-side">
          <Carousel carouselIcon={carouselIcon} carouselPause={carouselPause} pauseCarousel={pauseCarousel} startCarousel={startCarousel} universesDatas={universesDatas} genresDatas={genresDatas} adventuresDatas={adventuresDatas} />
          <FilterDesktop removeGenreFromFilter={removeGenreFromFilter} addGenreToFilter={addGenreToFilter} removeUniverseFromFilter={removeUniverseFromFilter} addUniverseToFilter={addUniverseToFilter} universesDatas={universesDatas} genresDatas={genresDatas} />
        </section>
        {/* === SECTION SEARCHBAR/ADVENTURES LIST/FILTER ON MOBILE === */}
        <section className="catalogue__right-side">
          <h1 className="catalogue__title">Les aventures</h1>
          <SearchBar searchbarInput={searchbarInput} adventureSearchbarInput={adventureSearchbarInput} deleteInputValue={deleteInputValue} />
          <FilterMobile removeGenreFromFilter={removeGenreFromFilter} addGenreToFilter={addGenreToFilter} removeUniverseFromFilter={removeUniverseFromFilter} addUniverseToFilter={addUniverseToFilter} universesDatas={universesDatas} genresDatas={genresDatas} />
          <Adventures genresFiltered={genresFiltered} universesFiltered={universesFiltered} searchbarInput={searchbarInput} universesDatas={universesDatas} genresDatas={genresDatas} adventuresDatas={adventuresDatas} />
        </section>
      </main>
    );
  }
}

Catalogue.propTypes = {
  // func required
  fetchAdventures: PropTypes.func.isRequired,
  adventureSearchbarInput: PropTypes.func.isRequired,
  fetchUniverses: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  addUniverseToFilter: PropTypes.func.isRequired,
  removeUniverseFromFilter: PropTypes.func.isRequired,
  addGenreToFilter: PropTypes.func.isRequired,
  removeGenreFromFilter: PropTypes.func.isRequired,
  deleteInputValue: PropTypes.func.isRequired,
  pauseCarousel: PropTypes.func.isRequired,
  startCarousel: PropTypes.func.isRequired,
  emptyFilters: PropTypes.func.isRequired,
  // array required
  adventuresDatas: PropTypes.array.isRequired,
  universesDatas: PropTypes.array.isRequired,
  genresDatas: PropTypes.array.isRequired,
  universesFiltered: PropTypes.array.isRequired,
  genresFiltered: PropTypes.array.isRequired,
  // string required
  searchbarInput: PropTypes.string.isRequired,
  carouselIcon: PropTypes.string.isRequired,
  // bool required
  carouselPause: PropTypes.bool.isRequired,
};

// == Export
export default Catalogue;
