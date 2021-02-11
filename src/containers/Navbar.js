// imports
import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar.js';

import { logout } from 'src/store/ActionCreators';


const mapStateToProps = state => ({
  signin: state.signin,
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => {
    dispatch(logout());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
