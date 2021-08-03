import TopBar from '@presentation/components/TopBar';
import { render } from '@testing-library/react';

describe('TopBar', () => {
  it('should be able to render TopBar component', () => {
    expect(() => {
      render(<TopBar />);
    }).not.toThrow();
  });
});
