import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = props.currentUser;
    this.logout = props.logout;
  }

  render() {

    return (
      <div>
        <Navbar logout={this.logout} />
      </div>
    )
  }
};

export default Home;
