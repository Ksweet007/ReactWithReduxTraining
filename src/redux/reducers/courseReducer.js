import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]; //Whatever is returned becomes new state for this reducer
    default:
      return state; //Return state if an action is not related to this reducer
  }
}
