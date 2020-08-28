import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  dispatchActionGetProductsData,
} from 'state/actions';

let dispatch;

const getProducts = (params) => {
  dispatchActionGetProductsData(dispatch)(params);
};

export default () => {
  dispatch = useDispatch();
  const {
    data, loading, _page, name_like, hasNextPage,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (!data.length) {
      getProducts({ _page });
    }
  }, [data.length, _page]);

  return {
    getProducts,
    data,
    loading,
    _page,
    name_like,
    hasNextPage,
  };
};
