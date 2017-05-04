import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

// Page Sections
import Hero from './ui/hero';
import HowItWorks from './ui/how-it-works';

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
      <main className="App">
        <Hero />
        <section>
          <HowItWorks />
        </section>
      </main>
    );
  }
}

export default App;
