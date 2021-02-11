// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import Choice from './Choice';

// == Composant
const Choices = ({ displayChoice, displayChoices, hideChoices, choices }) => {
  const showChoices = () => {
    displayChoices();
  };

  const cssClassNames = classNames('adventure__choices__list', {
    'choice-display': displayChoice,
    'choice-hidden': !displayChoice,
  });

  return (
    <section className="adventure__choices">
      <button type="button" className="adventure__what-to-do" onClick={showChoices}>Que voulez-vous faire ? </button>
      <div className={cssClassNames}>
        {
          choices.choix_1 && choices.choix_1[0] !== '' && <Choice choice={choices.choix_1} url={choices.url_du_choix_1} hidden={hideChoices} />
        }
        {
          choices.choix_2 && choices.choix_2[0] !== '' && <Choice choice={choices.choix_2} url={choices.url_du_choix_2} hidden={hideChoices} />
        }
        {
          choices.choix_3 && choices.choix_3[0] !== '' && <Choice choice={choices.choix_3} url={choices.url_du_choix_3} hidden={hideChoices} />
        }
        {
          choices.choix_4 && choices.choix_4[0] !== '' && <Choice choice={choices.choix_4} url={choices.url_du_choix_4} hidden={hideChoices} />
        }
      </div>
    </section>
  );
};

Choices.propTypes = {
  displayChoice: PropTypes.bool.isRequired,
  displayChoices: PropTypes.func.isRequired,
  hideChoices: PropTypes.func.isRequired,
  choices: PropTypes.object.isRequired,
};

// == Export
export default Choices;
