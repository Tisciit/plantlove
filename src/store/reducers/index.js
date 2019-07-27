//-------------------------------------
import {combineReducers} from "redux";
import plantReducer from "./plantreducers";

const theReducer = combineReducers({
    plants: plantReducer,
});

export default theReducer;