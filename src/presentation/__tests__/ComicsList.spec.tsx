import ComicsList from '@presentation/components/ComicsList';
import { render } from '@testing-library/react';

describe('ComicsList Component', () => {
  it('should be able to render ComicsList', () => {
    expect(() => {
      render(<ComicsList />);
    }).not.toThrow();
  });
});
