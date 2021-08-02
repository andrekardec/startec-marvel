import Footer from '@presentation/components/Footer';
import { render } from '@testing-library/react';
  
  
  describe('Footer Component', () => {
    it('should be able to render Footer', () => {
      expect(() => {
        render(<Footer />);
      }).not.toThrow();
    });
  });