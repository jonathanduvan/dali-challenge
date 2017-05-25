import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Columns from 'react-columns';
import { fetchMembers } from '../actions';


import MemberIcon from '../components/member_icon';

class Members extends Component {
  constructor(props) {
    super(props);

      // init component state here
    this.state = {};

    this.memberRender = this.memberRender.bind(this);
  }

  componentDidMount() {
    this.props.fetchMembers();
  }


  memberRender() {
    if (this.props.member === null) {
      return (
        <div />
      );
    } else {
      return (

        <div />
      );
    }
  }
  render() {
    const members = this.props.all.map((member) => {
      const _id = member.lat_long[0] + member.lat_long[1];
      return (
        <MemberIcon key={_id} member={member} />
      );
    });

    const queries = [{
      columns: 2,
      query: 'min-width: 400px',
    },
    {
      columns: 3,
      query: 'min-width: 750px',
    }, {
      columns: 4,
      query: 'min-width: 1100px',
    }];


    return (

      <div className="container">
        {this.memberRender()}
        <Columns queries={queries} gap="5">
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
    member: state.members.currentMember,
  }
);

export default withRouter(connect(mapStateToProps, { fetchMembers })(Members));
