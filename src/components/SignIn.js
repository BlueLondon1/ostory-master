// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import : local

// == Composant
const SignIn = ({
  password,
  userSignIn,
  userInfos,
  message,
  username,
}) => {
  const signIn = (event) => {
    if (event.target.id === 'username') {
      userSignIn(event.target.value, password);
    }
    else if (event.target.id === 'password') {
      userSignIn(username, event.target.value);
    }
  };

  const sendInfos = (event) => {
    event.preventDefault();
    userInfos();
  };

  return (
    <div className="sign-in">
      <h1 className="sign-in__title">Connexion</h1>
      <div className="sign-in__error-message">{message}</div>
      <form className="sign-in__form" onSubmit={sendInfos}>
        <label className="sign-in__form__label" htmlFor="username"><span>Pseudo<span className="sign-in__form__required">*</span></span><input className="sign-in__form__input" onChange={signIn} type="text" id="username" value={username} /></label>
        <label className="sign-in__form__label" htmlFor="password"><span>Mot de passe <span className="sign-in__form__required">*</span></span><input className="sign-in__form__input" onChange={signIn} type="password" id="password" value={password} /></label>
        <p className="sign-in__form__forgotten-password"><a href="http://ostory.io/blog/wp/wp-login.php?action=lostpassword" className="sign-in__form__link"> mot de passe oublié ?</a></p>
        <button className="sign-in__form__submit-button" type="submit">se connecter</button>
        <p className="sign-in__form__caption"><span className="sign-in__form__required">*</span> Champs obligatoire.</p>
        <p className="sign-in__form__sign-up">Pas encore inscrit ? <Link exact to="/signup" className="sign-in__form__link">Créer un compte</Link></p>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  userSignIn: PropTypes.func.isRequired,
  userInfos: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

// == Export
export default SignIn;
