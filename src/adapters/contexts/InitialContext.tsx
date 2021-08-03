import { createContext } from 'react';

type InitialContextData = {
  voteA: number,
  voteB: number,
  handleVoteA() : void;
  handleVoteB() : void;
};

export const InitialContext = createContext<InitialContextData>({} as InitialContextData);

export default InitialContext;
