
import axios from 'axios';
// import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_MEMBERS: 'FETCH_MEMBERS',
  FETCH_MEMBER: 'FETCH_MEMBER',
};


export function fetchMembers() {
  return (dispatch) => {
    axios.get('http://mappy.dali.dartmouth.edu/members.json').then((response) => {
      dispatch({
        type: 'FETCH_MEMBERS',
        payload: response.data,
      });
    }).catch((error) => {
      console.log(error);
    });
  };
}
