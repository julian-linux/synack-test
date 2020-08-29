import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '.';

describe('NotFound Component', () => {
  it('render without crashing', () => {
    expect(shallow(<NotFound />)).toBeTruthy();
  });
});
