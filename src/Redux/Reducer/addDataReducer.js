import * as types from "../ActionTypes";
const initialState = {
  addDataResponse: null,
};
export default function addDatareducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DATA:
      return {
        ...state,
        addDataResponse: action.response,
      };

    default:
      return state;
  }
}
