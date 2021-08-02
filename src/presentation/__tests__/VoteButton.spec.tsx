import VoteButton from '@presentation/components/VoteButton';
import { render } from '@testing-library/react';
  
  
  describe('VoteButton Component', () => {
    it('should be able to render VoteButton', () => {
      expect(() => {
        render(<VoteButton />);
      }).not.toThrow();
    });
  });