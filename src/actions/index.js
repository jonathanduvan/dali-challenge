
import axios from 'axios';
// import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_MEMBERS: 'FETCH_MEMBERS',
  FETCH_MAP: 'FETCH_MAP',
  FETCH_SITE: 'FETCH_SITE',
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
export function fetchMemberMap(member) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_MAP',
      payload: member,
    });
  };
}
export function fetchMemberSite(member) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_SITE',
      payload: member,
    });
  };
}
