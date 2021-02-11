// imports
import { connect } from 'react-redux';
import SignIn from 'src/components/SignIn';
import { signIn, sendUserInfosSignIn, errorMessage } from 'src/store/ActionCreators';

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  userSignIn: (username, password) => {
    dispatch(signIn(username, password));
  },

  userInfos: () => {
    dispatch(sendUserInfosSignIn());
  },

  wrongRequest: (message) => {
    dispatch(errorMessage(message));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
