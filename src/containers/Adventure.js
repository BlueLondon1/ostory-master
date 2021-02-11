// imports
import { connect } from 'react-redux';
import Adventure from 'src/components/Adventure';

import { fetchAdventureDatas } from 'src/store/ActionCreators';

const mapStateToProps = state => ({
  adventureDatas: state.adventureDatas,
  loaded: state.loaded,
});

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (adventureId) => {
    dispatch(fetchAdventureDatas(adventureId));
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Adventure);
