import ComicGallery from '@presentation/components/ComicsGallery';
import { render } from '@testing-library/react';
 
 
 describe('ComicGallery Component', () => {
   it('should be able to render ComicGallery', () => {
     expect(() => {
       render(<ComicGallery />);
     }).not.toThrow();
   });
 });