import InitialContext from '@adapters/contexts/InitialContext';
import { useContext } from 'react';

export const useInitialData = () =>
  useContext(InitialContext);
