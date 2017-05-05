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
    const { shopifyToken } = this.props.app;
    const query = queryString.parse(this.props.location.search);
    const checkPassed = shopifyToken.verifyHmac(query);
    console.log(query);
    if (checkPassed) {
      this.setState({
        securityChecksPassed: checkPassed,
      }, () => {
        shopifyToken.getAccessToken(query.shop, query.code)
          .then((token) => {
            console.log('got token', token);
          })
          .catch((err) => {
            console.log('err', err);
          })
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
