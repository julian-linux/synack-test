import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import Search from '.';

jest.mock('lodash/debounce', () => (callback) => callback());

describe('Search Component', () => {
  it('render without crashing', () => {
    expect(shallow(<Search onSearch={() => {}} loading={false} onClear={() => {}} />)).toBeTruthy();
  });

  it('should call "onSearch" function once debounce time is expired', async () => {
    const spy = jest.fn();
    const component = shallow(<Search onSearch={spy} loading={false} onClear={() => {}} />);

    component.find(TextField).simulate('change', { target: { name: 'search', value: 'test' } });

    expect(spy).toHaveBeenCalled();
  });

  it('should call "onClear" function when clear button is pressed', async () => {
    const spy = jest.fn();
    const { getByTestId } = render(<Search onSearch={() => {}} loading={false} onClear={spy} />);

    fireEvent.click(getByTestId('SearchBoxClear'));
    expect(spy).toHaveBeenCalled();
  });

  it('should show CircularProgress if loading prop is true ', async () => {
    const spy = jest.fn();
    const component = shallow(<Search onSearch={() => {}} loading onClear={spy} />);
    expect(component.find(CircularProgress)).toBeTruthy();
  });
});
