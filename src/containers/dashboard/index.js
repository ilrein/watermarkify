//
// Dashboard =)
//
import React, { Component } from 'react';
import queryString from 'query-string';

class Dashboard extends Component {
  componentDidMount() {
    console.log(
      queryString.parse(this.props.location.search)
    );
  }

  render() {
    return (
      <div>dashboard</div>
    );
  }
}

export default Dashboard;
