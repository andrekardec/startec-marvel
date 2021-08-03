/**
 * @jest-environment jsdom
 */
import ComicCard from '@presentation/components/ComicCard';
import { render } from '@testing-library/react';

describe('ComicCard Component', () => {
  it('should be able to render ComicCard', () => {
    expect(() => {
      render(<ComicCard
        image="http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/landscape_xlarge.jpg"
        title="Spider man rocks"
      />);
    }).not.toThrow();
  });
});
