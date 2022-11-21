import { ActionType } from '../contents/actionType';

export const changeloggedIn = (isLoggedIn, user) => {
  return (dispatch) => {
     dispatch({
           type: ActionType.LOGIN_SUCCESS,
           payload: { isLoggedIn: isLoggedIn, userData: user }
          });
     }
};

export const setProduct = (products) => {
  return{
    type: ActionType.SET_PRODUCTS,
    payload: products
  }
}

export const selectedProduct = (product) => {
  return{ 
    type: ActionType.SELECTED_PRODUCT,
    payload: product
  }
}

export const removeSelectedProduct = ()=>{
  return{
    type: ActionType.REMOVE_SELECTED_PRODUCT
  }
}