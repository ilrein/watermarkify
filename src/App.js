import React, { Component } from 'react';
import ShopifyToken from 'shopify-token';
import 'semantic-ui-css/semantic.min.css';

import Hero from './ui/hero';

class App extends Component {
  componentWillMount() {
    console.log(ShopifyToken);
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
