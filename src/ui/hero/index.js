import React, { Component } from 'react';

import styles from './styles.scss';

class Hero extends Component {
  componentWillMount() {
    this.setState({ redirectUri: process.env.REACT_APP_REDIRECT_URI });
  }

  render() {
    return (
      <div className={styles.hero}>
        {this.state.redirectUri}
      </div>
    );
  }
}

export default Hero;
