import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const NavBar = (props) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div id="navbar" className="nav-wrapper  grey darken-4">
          <h5 className="flow-text left">Dashboard</h5>
          <a href="#" className="brand-logo center"><img className="center" src={'dalilogo.png'} alt="cover" /></a>
        </div>
      </nav>
    </div>
  );
};


export default withRouter(connect()(NavBar));
