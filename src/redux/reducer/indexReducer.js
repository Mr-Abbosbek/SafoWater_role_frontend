import { combineReducers } from "redux";
import { productReducer, reducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
  login_reducer: reducer,
  allProducts: productReducer,
  product: selectedProductReducer
})