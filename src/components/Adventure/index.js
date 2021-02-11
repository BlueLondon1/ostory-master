// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Choices from 'src/containers/Choices';
import Story from './Story';

const Entities = require('html-entities').AllHtmlEntities;

// == Composant
class Adventure extends React.Component {
  componentDidMount = () => {
    const { fetchAdventure } = this.props;
    const currentId = this.props.match.params.id;
    fetchAdventure(currentId);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }

    const prevId = prevProps.match.params.id;
    const { fetchAdventure } = this.props;
    const currentId = this.props.match.params.id;
    if (prevId !== currentId) {
      fetchAdventure(currentId);
    }
  };

  render() {
    const entities = new Entities();
    const { adventureDatas, loaded } = this.props;
    return (
      <main className="adventure">
        {
        loaded || (
        <div className="adventure__loading">Chargement en cours ...</div>
        )}
        {loaded && (
          <>
            <h1 className="adventure__title">{entities.decode(adventureDatas.title.rendered)}</h1>
            <h2 className="adventure__catch-up-phrase">{adventureDatas.meta.phrase_daccroche}</h2>
            <Story moditData={adventureDatas.meta} content={adventureDatas.content.rendered} />
            <Choices choices={adventureDatas.meta} />
          </>
        )}
      </main>
    );
  }
}

Adventure.propTypes = {
  fetchAdventure: PropTypes.func.isRequired,

  adventureDatas: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,

  id: PropTypes.number.isRequired,

  loaded: PropTypes.bool.isRequired,

};


// == Export
export default Adventure;
