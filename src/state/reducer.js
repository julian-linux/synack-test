import setReducer from 'utils/setReducer';
import TYPES from './types';

export const initialState = {
  lang: localStorage.getItem('lang') || 'en',
  products: {
    name_like: '',
    _page: 1,
    hasNextPage: true,
    loading: false,
    data: [],
  },
};

const mainReducer = (state = { ...initialState }, { type, payload = {} }) => {
  switch (type) {
    case TYPES.PRODUCTS.REQUEST:
      return setReducer(state, payload);
    case TYPES.PRODUCTS.SUCCESS:
      return setReducer(state, payload, 'set', 'products.data');
    default:
      return state;
  }
};

export default mainReducer;
