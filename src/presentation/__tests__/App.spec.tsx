import App from '@presentation/App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('should be able to render App', () => {
    expect(() => {
      render(<App />);
    }).not.toThrow();
  });
});
