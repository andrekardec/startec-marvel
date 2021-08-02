/**
 * @jest-environment jsdom
 */
import WelcomeArea from '@presentation/components/WelcomeArea';
 import { render } from '@testing-library/react';
 
 
 describe('App', () => {
   it('should be able to render WelcomeArea', () => {
     expect(() => {
       render(<WelcomeArea />);
     }).not.toThrow();
   });
 });