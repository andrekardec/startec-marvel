/**
 * @jest-environment jsdom
 */
import ThemeSwitcher from '@presentation/components/ThemeSwitcher';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Switch from 'react-switch';

const theme = `${props => props.theme.title}`;

describe('Theme switcher', () => {

  it('should be able to render ThemeSwitcher component', () => {
    expect(() => {
      render(<ThemeSwitcher />);
    }).not.toThrow();
  });

  it('should call toggleTheme when switcher changes', () => {
    const mockFunction = jest.fn()

    const component = mount(<Switch
      onChange={mockFunction}
      checked={theme === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      offColor={`${props => props.theme.colors.textColor}`}
      onColor={`${props => props.theme.colors.background}`}/>);

      expect(mockFunction).not.toHaveBeenCalled();

      component.find('button').simulate('change');

      expect(mockFunction).toHaveBeenCalled();
  });

})