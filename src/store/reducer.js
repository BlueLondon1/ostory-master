import * as types from './ActionTypes';

const initialState = {
  signin: false,
  username: '',
  email: '',
  password: '',
  verifiedPassword: '',
  message: '',
  displayChoice: false,
  loaded: false,
  adventureId: null,
  searchbarInput: '',
  adventureDatas: {},
  adventuresDatas: [],
  universesDatas: [],
  genresDatas: [],
  universesFiltered: [],
  genresFiltered: [],
  carouselPause: false,
  carouselIcon: 'pause',
  userToken: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // adventure: display all choices
    case types.DISPLAY_CHOICES:
      return {
        ...state,
        displayChoice: true,
      };
    case types.HIDE_CHOICES:
      return {
        ...state,
        displayChoice: false,
      };
      // display current id adventure
    case types.FETCH_ADVENTURE_DATAS:
      return {
        ...state,
        adventureId: action.adventureId,
      };
    case types.RECEIVED_ADVENTURE_DATAS:
      return {
        ...state,
        adventureDatas: action.adventureDatas,
        loaded: true,
      };
      // display all adventures
    case types.FETCH_ADVENTURES_DATAS:
      return {
        ...state,
      };
    case types.RECEIVED_ADVENTURES_DATAS:
      return {
        ...state,
        adventuresDatas: action.adventuresDatas,
      };
      // catalogue searchbar
    case types.ADVENTURE_SEARCHBAR_INPUT:
      return {
        ...state,
        searchbarInput: action.searchbarInput,
      };
    case types.DELETE_SEARCHBAR_INPUT:
      return {
        ...state,
        searchbarInput: '',
      };
      // tags infos
    case types.FETCH_UNIVERSES_DATAS:
      return {
        ...state,
      };
    case types.RECEIVED_UNIVERSES_DATAS:
      return {
        ...state,
        universesDatas: action.universesDatas,
      };
    case types.FETCH_GENRES_DATAS:
      return {
        ...state,
      };
    case types.RECEIVED_GENRES_DATAS:
      return {
        ...state,
        genresDatas: action.genresDatas,
      };
      // tags filters
    case types.ADD_UNIVERSE_TO_FILTER:
      return {
        ...state,
        universesFiltered: [...state.universesFiltered, action.universeId],
      };
    case types.REMOVE_UNIVERSE_FROM_FILTER:
      return {
        ...state,
        universesFiltered: state.universesFiltered.filter(universe => universe !== action.universeId),
      };
    case types.ADD_GENRE_TO_FILTER:
      return {
        ...state,
        genresFiltered: [...state.genresFiltered, action.genreId],
      };
    case types.REMOVE_GENRE_FROM_FILTER:
      return {
        ...state,
        genresFiltered: state.genresFiltered.filter(genre => genre !== action.genreId),
      };
    case types.EMPTY__FILTERS:
      return {
        ...state,
        universesFiltered: [],
        genresFiltered: [],
        searchbarInput: '',
      };
      // user
    case types.SIGN_UP:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
        verifiedPassword: action.verifiedPassword,
      };
    case types.SEND_USER_INFOS_SIGNUP:
      return {
        ...state,
        message: 'Nous vérifions vos informations...',
      };
    case types.SIGN_IN:
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    case types.SEND_USER_INFOS_SIGNIN:
      return {
        ...state,
      };
    case types.LOGIN:
      return {
        ...state,
        signin: true,
        username: '',
        password: '',
        message: '',
      };
    case types.LOGOUT:
      return {
        ...state,
        signin: false,
      };
    case types.ERROR_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
      // carousel
    case types.PAUSE_CAROUSEL:
      return {
        ...state,
        carouselPause: true,
        carouselIcon: 'play',
      };
    case types.START_CAROUSEL:
      return {
        ...state,
        carouselPause: false,
        carouselIcon: 'pause',
      };
    default:
      return state;
  }
};

export default reducer;
