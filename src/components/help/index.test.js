import React from 'react';
import { shallow } from 'enzyme';

import Help from '.';

describe('Help Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Help />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show content once clicked', async () => {
    const btn = wrapper.find('#HelpButtonShowHelp');
    btn.props().onClick({ currentTarget: btn });

    expect(wrapper.find('#simple-popover')).toBeTruthy();
  });
});
