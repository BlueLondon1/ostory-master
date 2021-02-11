// imports
import { connect } from 'react-redux';
import Choices from 'src/components/Adventure/Choices';

import { displayChoices, hideChoices } from 'src/store/ActionCreators';

const mapStateToProps = state => ({
  displayChoice: state.displayChoice,
});

const mapDispatchToProps = dispatch => ({
  displayChoices: () => {
    dispatch(displayChoices());
  },
  hideChoices: () => {
    dispatch(hideChoices());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Choices);
