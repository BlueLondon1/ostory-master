// imports
import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp.js';
import { signUp, sendUserInfosSignUp, errorMessage } from 'src/store/ActionCreators';

const mapStateToProps = state => ({
  username: state.username,
  email: state.email,
  password: state.password,
  verifiedPassword: state.verifiedPassword,
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  userSignUp: (username, email, password, verifiedPassword) => {
    dispatch(signUp(username, email, password, verifiedPassword));
  },

  userInfos: () => {
    dispatch(sendUserInfosSignUp());
  },

  wrongRequest: (message) => {
    dispatch(errorMessage(message));
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
