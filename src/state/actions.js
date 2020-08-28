// import isEmpty from "lodash/isEmpty";

import * as api from './api';

import * as ac from './actionCreators';

export const dispatchActionGetProductsData = (dispatch) => async (
  params,
) => {
  dispatch(ac.getProductsRequestAC(params));
  try {
    setTimeout(async () => {
      const { data } = await api.getProducts(params);
      dispatch(ac.getProductsSuccessAC(data));
    }, 1000);
  } catch (e) {
    window.console.error('---error in dispatchActionGetProductsData---', e);
    dispatch(ac.requestErrorAC());
  }
};
