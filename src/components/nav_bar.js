import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const NavBar = (props) => {
  return (
    <nav>
      <div id="navbar" className="nav-wrapper  purple darken-4">
        <img className="center" src={'dalilogo.png'} alt="cover" />
      </div>
    </nav>
  );
};


export default withRouter(connect()(NavBar));