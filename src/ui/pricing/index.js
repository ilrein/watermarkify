//
// Pricing
//
import React from 'react';
import { Header } from 'semantic-ui-react';

import styles from './styles.scss';

const Pricing = () =>
  <div className={styles.container}>
    <div className={styles.col}>
      <Header as="h4">Pricing</Header>
    </div>
    <div className={styles.col}>
      <Header as="h4" className={styles.header}>
        2 Week Free Trial
        <Header.Subheader>
          $4.99/month
        </Header.Subheader>
      </Header>
    </div>
  </div>;

export default Pricing;
