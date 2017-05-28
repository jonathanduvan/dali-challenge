import React from 'react';
import { connect } from 'react-redux';
import { fetchMember, fetchMemberMap, fetchMemberSite } from '../actions';

const DALI = '//mappy.dali.dartmouth.edu/';

const MemberIcon = (props) => {
  function onClickMap() {
    props.fetchMemberMap(props.member.lat_long);
  }
  function onClickSite() {
    props.fetchMemberSite(props.member.url);
  }
  const iconURL = DALI.concat(props.member.iconUrl);

  return (
    <div id="memberCard" className="card small blue-grey lighten-5 hoverable">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="square" src={iconURL} alt="cover" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"id="memberName">{props.member.name}<i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal blue-grey lighten-5">
        <span className="card-title grey-text text-darken-4"id="memberName">{props.member.name}<i className="material-icons right">close</i></span>
        <p id="message">{props.member.message}</p>
        <p id="message">Terms on: {props.member.terms_on}</p>
        <p id="message">Project: {props.member.project}</p>
      </div>
      <div className="card-action">
        <button className="links" onClick={onClickMap}>Map</button>
        <button className="links" onClick={onClickSite}>Site</button>
      </div>

    </div>
  );
};

export default connect(null, { fetchMember, fetchMemberMap, fetchMemberSite })(MemberIcon);
