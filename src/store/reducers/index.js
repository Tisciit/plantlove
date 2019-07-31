//-------------------------------------
import {combineReducers} from "redux";
import plantReducer from "./plantreducers";
import defaultDataReducer from "./defaultDataReducer";

const theReducer = combineReducers({
    plants: plantReducer,
    defaultData: defaultDataReducer
});

export default theReducer;