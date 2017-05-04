import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Hero from './ui/hero';

const ShopifyToken = require('./token');

class App extends Component {
  componentWillMount() {
    const shopifyToken = new ShopifyToken({
      sharedSecret: process.env.REACT_APP_SHARED_SECRET,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      apiKey: process.env.REACT_APP_API_KEY
    });
    console.log(shopifyToken);
  }

  render() {
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default App;
