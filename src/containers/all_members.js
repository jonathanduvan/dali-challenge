import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Columns from 'react-columns';
import { fetchMembers } from '../actions';


import MemberIcon from '../components/member_icon';

class Members extends Component {

  componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    const members = this.props.all.map((member) => {
      const _id = member.lat_long[0] + member.lat_long[1];
      return (
        <MemberIcon key={_id} member={member} />
      );
    });

    return (
      <div className="container">
        <Columns columns="4" gap="5">
          {members}
        </Columns>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    all: state.members.all,
  }
);

export default withRouter(connect(mapStateToProps, { fetchMembers })(Members));
