import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Hero from './ui/hero';

const token = require('./token');

class App extends Component {
  render() {
    console.log(token);
    return (
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default App;
