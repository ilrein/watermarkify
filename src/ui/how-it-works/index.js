//
// How It Works
//
import React from 'react';
import { Header, Grid, Statistic } from 'semantic-ui-react';

import styles from './styles.scss';

const HowItWorks = () =>
  <div className={styles.main}>
    <Header as="h2" className={styles.header}>How It Works</Header>
    <Grid columns={3} stackable>
      <Grid.Column className={styles.col}>
        <Statistic className={styles.step}>1</Statistic>
        <img src="http://placehold.it/250x150" alt="" />
        <p className={styles.caption}>
          Drag an image on the app
        </p>
      </Grid.Column>
      <Grid.Column className={styles.col}>
        <Statistic className={styles.step}>2</Statistic>
        <img src="http://placehold.it/250x150" alt="" />
        <p className={styles.caption}>
          Drag another image to use as the watermark
        </p>
      </Grid.Column>
      <Grid.Column className={styles.col}>
        <Statistic className={styles.step}>3</Statistic>
        <img src="http://placehold.it/250x150" alt="" />
        <p className={styles.caption}>
          Tweak styles and export
        </p>
      </Grid.Column>
    </Grid>
  </div>;

export default HowItWorks;
