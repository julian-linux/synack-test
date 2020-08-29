import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/loading';

import Table from '.';

describe('Search Component', () => {
  it('render without crashing', () => {
    expect(shallow(<Table head={['a', 'b']} body={[[1, 1], [1, 1]]} fetchingMore={false} innerRef={() => {}} />)).toBeTruthy();
  });

  it('should show loading component if loading', () => {
    const component = shallow(<Table head={['a', 'b']} body={[[1, 1], [1, 1]]} fetchingMore innerRef={() => {}} />);
    expect(component.find(Loading)).toBeTruthy();
  });
});
