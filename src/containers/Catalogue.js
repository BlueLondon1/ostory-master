// imports
import { connect } from 'react-redux';
import Catalogue from 'src/components/Catalogue';

import {
  fetchAdventuresDatas,
  fetchUniversesDatas,
  fetchGenresDatas,
  addUniverseToFilter,
  removeUniverseFromFilter,
  addGenreToFilter,
  removeGenreFromFilter,
  deleteSearchbarInput,
  adventureSearchbarInput,
  pauseCarousel,
  startCarousel,
  emptyFilters,
} from 'src/store/ActionCreators';

const mapStateToProps = state => ({
  adventuresDatas: state.adventuresDatas,
  loaded: state.loaded,
  searchbarInput: state.searchbarInput,
  universesDatas: state.universesDatas,
  genresDatas: state.genresDatas,
  universesFiltered: state.universesFiltered,
  genresFiltered: state.genresFiltered,
  carouselPause: state.carouselPause,
  carouselIcon: state.carouselIcon,
});

const mapDispatchToProps = dispatch => ({
  fetchAdventures: () => {
    dispatch(fetchAdventuresDatas());
  },

  adventureSearchbarInput: (adventureInput) => {
    dispatch(adventureSearchbarInput(adventureInput));
  },

  fetchUniverses: () => {
    dispatch(fetchUniversesDatas());
  },

  fetchGenres: () => {
    dispatch(fetchGenresDatas());
  },

  addUniverseToFilter: (universeId) => {
    dispatch(addUniverseToFilter(universeId));
  },

  removeUniverseFromFilter: (universeId) => {
    dispatch(removeUniverseFromFilter(universeId));
  },

  addGenreToFilter: (genreId) => {
    dispatch(addGenreToFilter(genreId));
  },

  removeGenreFromFilter: (genreId) => {
    dispatch(removeGenreFromFilter(genreId));
  },

  emptyFilters: () => {
    dispatch(emptyFilters());
  },

  deleteInputValue: () => {
    dispatch(deleteSearchbarInput());
  },

  pauseCarousel: () => {
    dispatch(pauseCarousel());
  },

  startCarousel: () => {
    dispatch(startCarousel());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
