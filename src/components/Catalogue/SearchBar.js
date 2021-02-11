// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

// == Import : local

// == Composant
class SearchBar extends React.Component {
  // controlled input, change value of state the input value change.
  handleChange = (event) => {
    const { adventureSearchbarInput } = this.props;
    const { value } = event.target;
    adventureSearchbarInput(value);
  }

  deleteInput = () => {
    const { deleteInputValue } = this.props;
    deleteInputValue();
  }

  render() {
    const { searchbarInput } = this.props;
    return (
      <div className="catalogue__searchbar">
        <input title="rechercher une aventure" className="catalogue__searchbar__input" value={searchbarInput} onChange={this.handleChange} type="text" id="search-bar" placeholder="Rechercher une aventure" />
        <FA className="catalogue__searchbar__icon" title="vider la barre de recherche" onClick={this.deleteInput} name="trash-o" tag="i" />
      </div>
    );
  }
}

SearchBar.propTypes = {
  // func required
  adventureSearchbarInput: PropTypes.func.isRequired,
  deleteInputValue: PropTypes.func.isRequired,
  // string required
  searchbarInput: PropTypes.string.isRequired,
};


// == Export
export default SearchBar;
