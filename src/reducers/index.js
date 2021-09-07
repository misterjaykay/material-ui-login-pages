import { combineReducers } from "redux";
import counterRedudcer from "./counter";

const allReducers = combineReducers({
    counter : counterRedudcer,
})

export default allReducers;