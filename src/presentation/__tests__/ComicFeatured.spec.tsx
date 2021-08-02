import ComicFeatured from '@presentation/components/ComicFeatured';
import { render } from '@testing-library/react';
 
 
 describe('ComicFeatured Component', () => {
   it('should be able to render ComicFeatured', () => {
     expect(() => {
       render(<ComicFeatured />);
     }).not.toThrow();
   });
 });