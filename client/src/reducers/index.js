import cart from "./cart";
import filter from "./filter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart,
    filter
});

export default rootReducer;
