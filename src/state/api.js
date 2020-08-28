/* eslint-disable import/prefer-default-export */
import api from 'config/api';

export const getProducts = (options) => {
  const params = { ...options };

  if (params.name_like === '') {
    delete params.name_like;
  }

  return api.get('/products', { params });
};
