
import React from 'react';

/* eslint jsx-a11y/no-static-element-interactions: 0 */


const DALI = '//mappy.dali.dartmouth.edu/';

const MemberIcon = (props) => {
  console.log(props.member.iconUrl);
  const iconURL = DALI.concat(props.member.iconUrl);


  return (
    <div id="memberCard" className="card small blue lighten-1 hoverable">
      <img className="circle responsive-img" src={iconURL} alt="cover" />
      <h4 id="memberName">{props.member.name}</h4>
    </div>
  );
};

export default MemberIcon;
