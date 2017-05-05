//
// Dashboard =)
//
import React, { Component } from 'react';
import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';

class Callback extends Component {
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
        // fetch(`${query.shop}/auth/token`, {
        //   headers: {
        //     code: query.code,
        //     hmac: query.hmac,
        //     shop: query.shop,
        //     state: query.state,
        //     timestamp: query.timestamp,
        //   },
        // })
        // .then(data => data.json())
        // .then(data => console.log(data))
        // .catch(e => console.log('error!', e));
      });
    }
  }

  render() {
    return (
      this.state.securityChecksPassed ?
        <div>callback</div> :
        <div>Security checks failed. Access denied.</div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Callback);
