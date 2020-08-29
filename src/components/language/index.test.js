import React from 'react';
import { shallow } from 'enzyme';

import Language from '.';

let actionCalled = false;

jest.mock('hooks/useLang', () => () => ([
  () => { actionCalled = true; },
  'en',
]));

describe('Language Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Language />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    actionCalled = false;
  });

  it('render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should change language when clicked', async () => {
    const btn = wrapper.find('#ChangeLanguage');
    btn.simulate('change');

    expect(actionCalled).toBeTruthy();
  });
});
