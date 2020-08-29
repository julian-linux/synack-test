import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer, { initialState } from 'state/reducer';
import useProductsData from './useProductsData';

const store = createStore(reducer, initialState);

const mockFn = jest.fn();

jest.mock('state/actions', () => ({
  dispatchActionGetProductsData: () => mockFn,
}));

const Component = () => {
  const {
    getProducts,
    data,
    loading,
    name_like,
    _page,
    hasNextPage,
  } = useProductsData();
  return (
    <>
      <button type="button" id="button" onClick={() => getProducts()}>-</button>
      <span id="data">{JSON.stringify(data)}</span>
      <span id="loading">{JSON.stringify(loading)}</span>
      <span id="_page">{JSON.stringify(_page)}</span>
      <span id="name_like">{JSON.stringify(name_like)}</span>
      <span id="hasNextPage">{JSON.stringify(hasNextPage)}</span>
    </>
  );
};

describe('useProductsData Hook', () => {
  it('should get data if state empty', () => {
    mount(
      <Provider store={store}>
        <Component />
      </Provider>,
    );

    expect(mockFn).toBeCalled();
  });
});
