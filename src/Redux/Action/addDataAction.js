import * as types from "../ActionTypes";


export function addDataCall(data) {
  console.log(data)
  return function (dispatch) {
    dispatch(addData(data));
  };
}

export function addData(response) {
  return {
    type: types.ADD_DATA,
    response,
  };
}

