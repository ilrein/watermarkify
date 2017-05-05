//
// Dashboard =)
//
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    securityChecksPassed: false,
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const checkPassed = this.props.app.shopifyToken.verifyHmac(query);
    if (checkPassed) {
      this.setState({
        securityChecksPassed: checkPassed,
      });
    }
  }

  render() {
    return (
      this.state.securityChecksPassed ?
        <div>dashboard</div> :
        <div>Security checks failed. Access denied.</div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Dashboard);
