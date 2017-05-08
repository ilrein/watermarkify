//
// Dashboard =)
//
import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import receivedAccessToken from '../../actions/receivedAccessToken';

class Callback extends Component {
  static contextTypes = {
    router: PropTypes.shape({}).isRequired
  }

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
          .then(json => {
            /**
             * store token in the store for later use
             */
            this.props.receivedAccessToken(json);
            /**
             * redirect now that we have access
             */
            this.context.router.history.push('/dashboard');
          })
          .catch(e => window.location.href = '/');
      });
    }
  }

  render() {
    return (
      this.state.securityChecksPassed ?
        <div>Registering application...</div> :
        <div>Security checks failed. Access denied.</div>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => ({
  receivedAccessToken(token) {
    dispatch(receivedAccessToken(token))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
