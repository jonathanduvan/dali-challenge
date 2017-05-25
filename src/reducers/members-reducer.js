import { ActionTypes } from '../actions';

const MembersReducer = (state = { all: [], currentMember: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MEMBERS:
      return { all: action.payload, currentMember: state.currentMember };
    case ActionTypes.FETCH_MEMBER:
      return { all: state.all, currentMember: action.payload };
    default:
      return state;
  }
};

export default MembersReducer;
