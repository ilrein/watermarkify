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
          
        // const url = `https://${query.shop}/admin/oauth/access_token`;
        // fetch(url, {
        //   method: 'POST',
        //   headers: {
        //     code: query.code,
        //     hmac: query.hmac,
        //     shop: query.shop,
        //     state: query.state,
        //     timestamp: query.timestamp,
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     client_id: process.env.REACT_APP_API_KEY,
        //     client_secret: process.env.REACT_APP_SHARED_SECRET,
        //     code: query.code,
        //   })
        // })
        // .then(data => data.json())
        // .then(json => console.log(json))
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
