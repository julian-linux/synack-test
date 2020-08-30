import React from 'react';
import { shallow } from 'enzyme';

import Loading from '.';

describe('Loading Component', () => {
  it('render without crashing', () => {
    expect(shallow(<Loading />)).toBeTruthy();
  });

  it('should show Backdrop if "backdrop" prop is setted', async () => {
    const component = shallow(<Loading backdrop />);
    expect(component.find('.MuiBackdrop-root')).toBeTruthy();
  });

  it('should show CirlularProgress ', async () => {
    const component = shallow(<Loading />);
    expect(component.find('.MuiCircularProgress-root')).toBeTruthy();
  });
});
