// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../images/logo-red.png';

// == Import : local

// == Composant
const Navbar = ({ signin, userLogout }) => {
  const logout = () => {
    userLogout();
    sessionStorage.removeItem('token');
    window.location = '/';
  };

  const unchecked = () => {
    const checkbox = document.querySelector('#burger');
    checkbox.checked = false;
  };

  return (

    /* ============ SECTION HEADER ============ */
    <header className="header">
      <div className="header_logo">
        <NavLink activeClassName="selected" exact to="/"><img src={Logo} alt="logo oStory" /></NavLink>
      </div>

      {/* ============ SECTION EXTRA LARGE HEADER ============ */}
      <div className="header_nav">
        <ul className="header_nav_list">
          { signin === false && <li className="header_nav_list_item"> <NavLink activeClassName="header_nav_list_item_active" exact to="/">Accueil</NavLink></li> }
          { signin && <li className="header_nav_list_item"><NavLink activeClassName="header_nav_list_item_active" exact to="/profile">Profil</NavLink> </li> }
          <li className="header_nav_list_item"><NavLink activeClassName="header_nav_list_item_active" exact to="/adventures">Aventures</NavLink></li>
          <li className="header_nav_list_item"><a href="/blog">Blog</a></li>
          <li className="header_nav_list_item"><NavLink activeClassName="header_nav_list_item_active" exact to="/about">A propos</NavLink></li>
        </ul>
      </div>

      <div className="header_sign">
        { signin === false && <button className="header_sign-up" type="button"><NavLink activeClassName="selected" exact to="/signup">Inscription</NavLink></button> }
        { signin === false && <button className="header_sign-in" type="button"><NavLink activeClassName="selected" exact to="/signin">Connexion</NavLink></button> }
        { signin && <button className="header_sign-out" onClick={logout} type="button">Déconnexion</button>}
      </div>

      {/* ============ SECTION SMALL-MEDIUM HEADER ============ */}

      <input className="header_burger" id="burger" type="checkbox" />

      <label className="header_burger_label" htmlFor="burger">
        <i className="fa fa-bars" aria-hidden="true" />
      </label>

      <nav className="header_burger_nav">
        <ul className="header_burger_nav_list">
          <li className="header_burger_nav_list_item">{ signin === false && <NavLink onClick={unchecked} exact to="/">Accueil</NavLink> }</li>
          <li className="header_burger_nav_list_item">{ signin && <NavLink onClick={unchecked} exact to="/profile">Profil</NavLink> }</li>
          <li className="header_burger_nav_list_item"><NavLink onClick={unchecked} exact to="/adventures">Aventures</NavLink></li>
          <li className="header_burger_nav_list_item"><a href="/blog">Blog</a></li>
          <li className="header_burger_nav_list_item">{<NavLink onClick={unchecked} exact to="/about">A propos</NavLink>}</li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  signin: PropTypes.bool.isRequired,
  userLogout: PropTypes.func.isRequired,
};

// == Export
export default Navbar;
