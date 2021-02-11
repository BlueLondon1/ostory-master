import axios from 'axios';

import {
  FETCH_ADVENTURES_DATAS,
  FETCH_ADVENTURE_DATAS,
  SEND_USER_INFOS_SIGNUP,
  SEND_USER_INFOS_SIGNIN,
  FETCH_UNIVERSES_DATAS,
  FETCH_GENRES_DATAS,
  STILL_LOGGEDIN,
} from './ActionTypes';

import {
  receivedAdventureDatas,
  receivedAdventuresDatas,
  errorMessage,
  login,
  receivedUniversesDatas,
  receivedGenresDatas,
} from './ActionCreators';

const logMiddleware = store => next => (action) => {
  next(action);

  switch (action.type) {
    case FETCH_ADVENTURE_DATAS:
      axios.get(`http://92.243.9.174/blog/wp-json/wp/v2/story/${store.getState().adventureId}`)
        .then((response) => {
          console.log(response.data);
          const adventureDatas = response.data;
          store.dispatch(receivedAdventureDatas(adventureDatas));
        })
        .catch((error) => {
          console.log(error);
        });
      axios.post(`http://92.243.9.174/blog/wp-json/wp/v2/users/me?saves=${store.getState().adventureId}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_ADVENTURES_DATAS:
      axios.get('http://92.243.9.174/blog/wp-json/wp/v2/story/?starter=13')
        .then((response) => {
          const adventuresDatas = response.data;
          store.dispatch(receivedAdventuresDatas(adventuresDatas));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_UNIVERSES_DATAS:
      axios.get('http://92.243.9.174/blog/wp-json/wp/v2/universe')
        .then((response) => {
          console.log(response.data);
          const universesDatas = response.data;
          store.dispatch(receivedUniversesDatas(universesDatas));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_GENRES_DATAS:
      axios.get('http://92.243.9.174/blog/wp-json/wp/v2/genre')
        .then((response2) => {
          const genresDatas = response2.data;
          store.dispatch(receivedGenresDatas(genresDatas));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SEND_USER_INFOS_SIGNUP:
      axios.post('http://92.243.9.174/blog/wp-json/wp/v2/users/register', {
        username: store.getState().username,
        email: store.getState().email,
        password: store.getState().password,
      }, {
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(errorMessage('Félicitations, vous êtes bien inscrit !'));
          window.location = '/#/signin';
        })
        .catch((error) => {
          store.dispatch(errorMessage(error.response.data.message));
        });
      break;
    case SEND_USER_INFOS_SIGNIN:
      axios.post(`http://92.243.9.174/blog/wp-json/jwt-auth/v1/token?username=${encodeURIComponent(store.getState().username)}&password=${encodeURIComponent(store.getState().password)}`)
        .then((response) => {
          store.dispatch(login());
          sessionStorage.setItem('token', `${response.data.token}`);
        })
        .catch((error) => {
          store.dispatch(errorMessage('Le pseudo ou le mot de passe est incorrect.'));
          console.log(error);
        });
      break;
    case STILL_LOGGEDIN:
      axios.post('http://92.243.9.174/blog/wp-json/jwt-auth/v1/token/validate', {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(login());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
