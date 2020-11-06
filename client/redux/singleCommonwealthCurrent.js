import redux from "redux";
import axios from "axios";

// Action Types
const GET_SINGLE_CW_CURRENT = "GET_SINGLE_CW_CURRENT";

// Action Creators >>> cw must be a two-letter variable
export const getSingleCwCurrent = (cw) => {
  return ({
    type: GET_SINGLE_CW_CURRENT,
    cw
  })
}

// Thunks
export const fetchSingleCwCurrent = (cw) => {
  return async (dispatch) => {
    const data = await axios.get(`api/cw/${cw}`);
    dispatch(getSingleCwCurrent(data))
  }
}

// Initial State
const INITIAL_STATE = {};

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SINGLE_CW_CURRENT:
      return action.cw;
    default:
      return state;
  }
}

export default reducer;
