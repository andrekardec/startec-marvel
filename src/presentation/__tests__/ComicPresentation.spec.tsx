import ComicPresentation from '@presentation/components/ComicPresentation';
import { render } from '@testing-library/react';

describe('ComicPresentation Component', () => {
  it('should be able to render ComicPresentation', () => {
    expect(() => {
      render(<ComicPresentation />);
    }).not.toThrow();
  });
});
