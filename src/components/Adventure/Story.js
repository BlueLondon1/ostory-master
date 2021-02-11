// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';

// == Import : local

const Entities = require('html-entities').AllHtmlEntities;


// == Composant
const Story = ({ content, moditData }) => {
  const moditWord = [
    moditData.modit_1,
    moditData.modit_2,
    moditData.modit_3,
  ];

  const moditUrl = [
    moditData.url_du_modit_1,
    moditData.url_du_modit_2,
    moditData.url_du_modit_3,
  ];


  const entities = new Entities();
  const contentArray = content.split(/<br>/);
  let index = -1;
  return (
    <section className="adventure__content">
      {contentArray.map(contentPart => (
        <p>
          {reactStringReplace(entities.decode(contentPart), '<strong></strong>', (match, i) => {
            index += 1;
            return (
              <Link key={i} to={moditUrl[index][0]}><strong>{moditWord[index]}</strong></Link>
            );
          })}
        </p>
      ))}
    </section>
  );
};

Story.propTypes = {
  content: PropTypes.string.isRequired,
  moditData: PropTypes.object.isRequired,
};

// == Export
export default Story;
