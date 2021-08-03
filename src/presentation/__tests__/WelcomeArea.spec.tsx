import WelcomeArea from '@presentation/components/WelcomeArea';
import { render } from '@testing-library/react';

describe('WelcomeArea', () => {
  it('should be able to render WelcomeArea', () => {
    expect(() => {
      render(<WelcomeArea />);
    }).not.toThrow();
  });
});
