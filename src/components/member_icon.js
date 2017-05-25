import React from 'react';
import { connect } from 'react-redux';
import { fetchMember } from '../actions';
/* eslint jsx-a11y/no-static-element-interactions: 0 */


const DALI = '//mappy.dali.dartmouth.edu/';

const MemberIcon = (props) => {
  function onClick() {
    props.fetchMember(props.member);
  }
  const iconURL = DALI.concat(props.member.iconUrl);

  return (
    <div id="memberCard" className="card small transparent hoverable" onClick={onClick}>
      <img className="circle" src={iconURL} alt="cover" />
      <h5 id="memberName">{props.member.name}</h5>
    </div>
  );
};

export default connect(null, { fetchMember })(MemberIcon);
