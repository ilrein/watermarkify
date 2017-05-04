import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

import {
  APP_NAME,
  APP_DESCRIPTION,
} from '../../constants';

import styles from './styles.scss';

class Hero extends Component {
  componentWillMount() {
    this.setState({ redirectUri: process.env.REACT_APP_REDIRECT_URI });
  }

  render() {
    return (
      <div className={styles.hero}>
        <Header className={styles.content} as="h1">
          {APP_NAME}
          <Header.Subheader>
            {APP_DESCRIPTION}
          </Header.Subheader>
        </Header>
        <Icon name="arrow down" className={styles.icon} size="large" />
      </div>
    );
  }
}

export default Hero;
