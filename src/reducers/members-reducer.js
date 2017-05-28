import { ActionTypes } from '../actions';

const MembersReducer = (state = { all: [], memberMap: null, memberSite: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MEMBERS:
      return { all: action.payload, currentMember: state.currentMember };
    case ActionTypes.FETCH_MAP:
      return { all: state.all, memberMap: action.payload, memberSite: null };
    case ActionTypes.FETCH_SITE:
      return { all: state.all, memberMap: null, memberSite: action.payload };
    default:
      return state;
  }
};

export default MembersReducer;
