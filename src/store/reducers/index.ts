import { combineReducers } from "redux";
import productsSlice from "../slices/productsSlice";

const reducers = combineReducers({
    productsSlice
});

export default reducers;