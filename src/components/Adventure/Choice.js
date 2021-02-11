// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Composant
const Choice = ({ hidden, choice, url }) => {
  const backToHidden = () => {
    hidden();
  };

  return (
    <Link to={url[0]} onClick={backToHidden} className="adventure__choices__list__item">{choice[0]}</Link>
  );
};

Choice.propTypes = {
  hidden: PropTypes.func.isRequired,
  choice: PropTypes.array.isRequired,
  url: PropTypes.array.isRequired,
};
// == Export
export default Choice;
