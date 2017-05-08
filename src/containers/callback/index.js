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
    console.log(query);
    if (checkPassed) {
      this.setState({
        securityChecksPassed: checkPassed,
      }, () => {
        /**
         * We will need to use a cloud function here
         */
        console.log('checks passed...');
        fetch('https://us-central1-watermarkify.cloudfunctions.net/helloWorld')
          .then(response => response.json())
          .then(json => console.log(json))
        //   .then(json => console.log(json))
        //   .catch(e => console.log(e));


        // shopifyToken.getAccessToken(query.shop, query.code)
        //   .then((token) => {
        //     console.log('got token', token);
        //   })
        //   .catch((err) => {
        //     console.log('err', err);
        //   })
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
