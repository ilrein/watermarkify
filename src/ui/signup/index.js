//
// Signup
//
import React, { Component } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import styles from './styles.scss';

class Signup extends Component {
  state = { shopName: null }

  handleChange = (e) => this.setState({ shopName: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { shopifyToken } = this.props.app;
    const url = shopifyToken.generateAuthUrl(this.state.shopName);
    window.location.href = url;
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
            <input placeholder="fabrics-2017" onChange={this.handleChange} />
          </Form.Field>
          <Button type="submit" color="black" onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
})

export default connect(mapStateToProps)(Signup);
