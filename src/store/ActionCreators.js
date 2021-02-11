import * as types from './ActionTypes';

// adventure : display all choices
export const displayChoices = () => ({
  type: types.DISPLAY_CHOICES,
});

export const hideChoices = () => ({
  type: types.HIDE_CHOICES,
});

// display current id adventure
export const fetchAdventureDatas = adventureId => ({
  type: types.FETCH_ADVENTURE_DATAS,
  adventureId,
});

export const receivedAdventureDatas = adventureDatas => ({
  type: types.RECEIVED_ADVENTURE_DATAS,
  adventureDatas,
});

// display all adventures
export const fetchAdventuresDatas = () => ({
  type: types.FETCH_ADVENTURES_DATAS,
});

export const receivedAdventuresDatas = adventuresDatas => ({
  type: types.RECEIVED_ADVENTURES_DATAS,
  adventuresDatas,
});

// catalogue searchbar
export const adventureSearchbarInput = searchbarInput => ({
  type: types.ADVENTURE_SEARCHBAR_INPUT,
  searchbarInput,
});

export const deleteSearchbarInput = () => ({
  type: types.DELETE_SEARCHBAR_INPUT,
});

// tags infos
export const fetchUniversesDatas = () => ({
  type: types.FETCH_UNIVERSES_DATAS,
});

export const receivedUniversesDatas = universesDatas => ({
  type: types.RECEIVED_UNIVERSES_DATAS,
  universesDatas,
});

export const fetchGenresDatas = () => ({
  type: types.FETCH_GENRES_DATAS,
});

export const receivedGenresDatas = genresDatas => ({
  type: types.RECEIVED_GENRES_DATAS,
  genresDatas,
});

// tags filters

export const addUniverseToFilter = universeId => ({
  type: types.ADD_UNIVERSE_TO_FILTER,
  universeId,
});

export const removeUniverseFromFilter = universeId => ({
  type: types.REMOVE_UNIVERSE_FROM_FILTER,
  universeId,
});

export const addGenreToFilter = genreId => ({
  type: types.ADD_GENRE_TO_FILTER,
  genreId,
});

export const removeGenreFromFilter = genreId => ({
  type: types.REMOVE_GENRE_FROM_FILTER,
  genreId,
});

export const emptyFilters = () => ({
  type: types.EMPTY__FILTERS,
});

// user
export const signUp = (username, email, password, verifiedPassword) => ({
  type: types.SIGN_UP,
  username,
  email,
  password,
  verifiedPassword,
});

export const sendUserInfosSignUp = () => ({
  type: types.SEND_USER_INFOS_SIGNUP,
});

export const signIn = (username, password) => ({
  type: types.SIGN_IN,
  username,
  password,
});

export const sendUserInfosSignIn = () => ({
  type: types.SEND_USER_INFOS_SIGNIN,
});

export const login = () => ({
  type: types.LOGIN,
});

export const stillLoggedin = () => ({
  type: types.STILL_LOGGEDIN,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const errorMessage = message => ({
  type: types.ERROR_MESSAGE,
  message,
});

// carousel

export const pauseCarousel = () => ({
  type: types.PAUSE_CAROUSEL,
});

export const startCarousel = () => ({
  type: types.START_CAROUSEL,
});
