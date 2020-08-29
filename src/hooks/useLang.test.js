import React from 'react';
import { shallow } from 'enzyme';
import useLang from './useLang';

const mockLang = 'es';

jest.mock('react-redux', () => ({
  useSelector: (callback) => callback({ lang: mockLang }),
}));

describe('useLang Hook', () => {
  const { reload } = window.location;
  beforeAll(() => {
    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });
    window.location.reload = jest.fn();
  });

  afterAll(() => {
    jest.unmock('react-redux');
    window.location.reload = reload;
  });

  const Component = () => {
    const [setLang, lang] = useLang();
    return (
      <button type="button" id="button" onClick={() => setLang()}><span id="lang">{lang}</span></button>
    );
  };

  it('should get default lang', () => {
    const component = shallow(<Component />);
    expect(component.find('#lang').text()).toEqual(mockLang);
  });

  it('should change lang', () => {
    const component = shallow(<Component />);
    component.find('#button').simulate('click');

    expect(window.location.reload).toHaveBeenCalled();
  });
});
