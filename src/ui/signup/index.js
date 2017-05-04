//
// Signup
//
import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

import styles from './styles.scss';

class Signup extends Component {
  state = {}

  handleChange = (e) => this.setState({ shopName: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.container}>
        <Header as="h2" className={styles.header}>
          Signup Now!
        </Header>
        <Form>
          <Form.Field>
            <label>Shop Name</label>
            <input placeholder="fabrics-2017" />
          </Form.Field>
          <Button type="submit" color="black" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
