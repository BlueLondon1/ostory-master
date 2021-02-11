// == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import Navbar from 'src/containers/Navbar';
import Footer from 'src/components/Footer';
import Adventure from 'src/containers/Adventure';
import Catalogue from 'src/containers/Catalogue';
import SignUp from 'src/containers/SignUp';
import Home from 'src/components/Home';
import SignIn from 'src/containers/SignIn';
import Profile from 'src/components/Profile';
import About from 'src/components/About';
import NotFound from 'src/components/NotFound';
import Beta from 'src/components/Beta';

class App extends React.Component {
  componentDidMount = () => {
    const { stillLoggedin } = this.props;
    if (sessionStorage.getItem('token')) {
      stillLoggedin();
    }
  }

  render() {
    const { signin } = this.props;

    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/adventures"
            component={Catalogue}
          />
          <Route
            exact
            path="/adventures/adventure/:id"
            component={signin ? Adventure : SignIn}
          />
          <Route
            exact
            path="/signup"
            component={signin ? Profile : SignUp}
          />
          <Route
            exact
            path="/signin"
            component={signin ? Profile : SignIn}
          />
          <Route
            exact
            path="/profile"
            component={signin ? Profile : SignIn}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  signin: PropTypes.bool.isRequired,
  stillLoggedin: PropTypes.func.isRequired,
};


// == Export
export default App;
