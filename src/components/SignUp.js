// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Component
class SignUp extends React.Component {
  updateUserInfos = (event) => {
    const {
      userSignUp,
      username,
      email,
      password,
      verifiedPassword,
    } = this.props;

    // change state for each character user put in the form
    if (event.target.id === 'username') {
      userSignUp(event.target.value, email, password, verifiedPassword);
    }
    else if (event.target.id === 'email') {
      userSignUp(username, event.target.value, password, verifiedPassword);
    }
    else if (event.target.id === 'password') {
      userSignUp(username, email, event.target.value, verifiedPassword);
    }
    else if (event.target.id === 'verifiedPassword') {
      userSignUp(username, email, password, event.target.value);
    }
  };

  sendInfos = (event) => {
    const {
      password,
      verifiedPassword,
      userInfos,
      wrongRequest,
    } = this.props;

    event.preventDefault();
    // check if the two passwords are the same.
    // others checks are made by wordpress API.
    if (password === verifiedPassword) {
      userInfos();
    }
    // send an error message if something went wrong with the submit.
    else {
      wrongRequest('les mots de passe doivent être identiques');
    }
  };

  // when we leave the sign-up page, the error message is erased.
  componentWillUnmount = () => {
    const { userSignUp, username } = this.props;
    userSignUp(username, '', '', '');
  }

  render() {
    const { message } = this.props;

    return (

    // ========= SECTION Sign Up Form =========

      <main className="sign-up">
        <h1 className="sign-up__title">Inscription</h1>
        <div className="sign-up__error-message">{message}</div>
        <form onSubmit={this.sendInfos} className="sign-up__form">
          <label className="sign-up__form__label" htmlFor="username"><span>Pseudo <span className="sign-up__form__required">*</span></span><input className="sign-up__form__input" onChange={this.updateUserInfos} type="text" id="username" value={this.username} /></label>
          <label className="sign-up__form__label" htmlFor="email"><span>E-mail <span className="sign-up__form__required">*</span></span><input className="sign-up__form__input" onChange={this.updateUserInfos} type="email" id="email" value={this.email} /></label>
          <label className="sign-up__form__label" htmlFor="password"><span>Mot de passe <span className="sign-up__form__required">*</span></span><input className="sign-up__form__input" onChange={this.updateUserInfos} type="password" id="password" value={this.password} /></label>
          <label className="sign-up__form__label" htmlFor="verifiedPassword"><span>Confirmation de mot de passe <span className="sign-up__form__required">*</span></span><input className="sign-up__form__input" onChange={this.updateUserInfos} type="password" id="verifiedPassword" value={this.verifiedPassword} /></label>
          <button className="sign-up__form__submit-button" type="submit">s'inscrire</button>
          <p className="sign-up__form__caption"><span className="sign-up__form__required">*</span> Champs obligatoire.</p>
        </form>
      </main>
    );
  }
}

SignUp.propTypes = {
  // string required
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  verifiedPassword: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,

  // func required
  userSignUp: PropTypes.func.isRequired,
  userInfos: PropTypes.func.isRequired,
  wrongRequest: PropTypes.func.isRequired,
};

// == Export
export default SignUp;
