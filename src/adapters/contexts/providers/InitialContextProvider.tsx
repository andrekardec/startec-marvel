import React, { useState } from 'react';

import InitialContext from '../InitialContext';

export const InitialContextProvider : React.FC = ({ children }) => {
  const [voteA, setVoteA] = useState<number>(112);
  const [voteB, setVoteB] = useState<number>(480);

  const handleVoteA = () => {
    setVoteA(voteA + 1);
  };

  const handleVoteB = () => {
    setVoteB(voteB + 1);
  };

  return (
    <InitialContext.Provider value={{
      voteA, voteB, handleVoteA, handleVoteB,
    }}
    >
      {children}
    </InitialContext.Provider>
  );
};
