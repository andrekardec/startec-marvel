import ThemeSwitcher from '@presentation/components/ThemeSwitcher';
import { render } from '@testing-library/react';

const theme = `${props => props.theme.title}`;

describe('Theme switcher', () => {

  it('should be able to render ThemeSwitcher component', () => {
    expect(() => {
      render(<ThemeSwitcher />);
    }).not.toThrow();
  });

})