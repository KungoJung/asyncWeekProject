import { combineReducers } from "redux";
import singleCwCurrentReducer from "./singleCommonwealthCurrent";

// NOTE ON STATE
// Because of the use of "state" as a reliable variable name in redux and react, this application uses the variable cw, short for "commonwealth" when referring to the geographic location states, so as not to get the two confused

const reducer = combineReducers({
  singleCwCurrent: singleCwCurrentReducer,
})

export default reducer
