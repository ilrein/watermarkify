//
// Dashboard =)
//
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';

class Callback extends Component {
  state = {
    securityChecksPassed: false,
  }

  componentDidMount() {
    const { shopifyToken } = this.props.app;
    const query = queryString.parse(this.props.location.search);
    const checkPassed = shopifyToken.verifyHmac(query);
    if (checkPassed) {
      this.setState({
        securityChecksPassed: checkPassed,
      }, () => {
        /**
         * We will need to use a cloud function here
         */

        fetch('/api/access_token', {
          headers: {
            shared_secret: process.env.REACT_APP_SHARED_SECRET,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            api_key: process.env.REACT_APP_API_KEY,
            hostname: query.shop,
            code: query.code,
          }
        })
          .then(data => data.json())
          .then(json => console.log(json))
          .catch(e => window.location.href = '/');
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
