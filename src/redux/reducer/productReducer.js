import { ActionType } from "../contents/actionType";

const iState = {
  loggedIn: false,
  userDetails: {},
};

export const reducer = (state = iState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        loggedIn: action.payload.isLoggedIn,
        userDetails: action.payload.userData,
      };
    default:
      return state;
  }
};

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
