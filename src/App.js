import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// CSS
import 'semantic-ui-css/semantic.min.css';

// Containers
import Home from './containers/home';
import Dashboard from './containers/dashboard';

// Redux
import initializeApplication from './actions/initializeApplication';

// Shopify API
const ShopifyToken = require('./token');

class App extends Component {
  componentWillMount() {
    const shopifyToken = new ShopifyToken({
      sharedSecret: process.env.REACT_APP_SHARED_SECRET,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      apiKey: process.env.REACT_APP_API_KEY
    });
    this.props.initializeApplication(shopifyToken);
  }

  render() {
    return (
      <Router basename="/watermarkify">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  initializeApplication(token) {
    dispatch(initializeApplication(token))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
