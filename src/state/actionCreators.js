import TYPES from './types';

export const requestErrorAC = (payload) => ({
  type: TYPES.ERROR,
  payload: {
    ...payload,
    submitting: false,
    loading: false,
  },
});
// -----
// PRODUCTS
// -----
export const getProductsRequestAC = ({ name_like, _page }) => ({
  type: TYPES.PRODUCTS.REQUEST,
  payload: {
    products: {
      loading: true,
      name_like,
      _page,
    },
  },
});

export const getProductsSuccessAC = (data) => ({
  type: TYPES.PRODUCTS.SUCCESS,
  payload: {
    products: {
      loading: false,
      data,
      hasNextPage: data.length > 0,
    },
  },
});
