// imports
import { connect } from 'react-redux';
import App from 'src/components/App';

import { stillLoggedin } from 'src/store/ActionCreators';

const mapStateToProps = state => ({
  signin: state.signin,
});

const mapDispatchToProps = dispatch => ({
  stillLoggedin: () => {
    dispatch(stillLoggedin());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(App);
