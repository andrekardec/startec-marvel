import BattleArea from '@presentation/components/BattleArea';
import { render } from '@testing-library/react';

describe('BattleArea Component', () => {
  it('should be able to render BattleArea', () => {
    expect(() => {
      render(<BattleArea />);
    }).not.toThrow();
  });
});
