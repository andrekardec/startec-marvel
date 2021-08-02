/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import ListCharactersUseCase from '@adapters/usecases/ListCharactersUseCase';
import ICharacterDTO from '@domain/dto/ICharacterDTO';

import { container } from 'tsyringe';
import CharactersContext from '../CharactersContext';

export const CharactersProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacter] = useState<ICharacterDTO[]>({} as ICharacterDTO[]);

  useEffect(() => {
    const listAllComics = container.resolve(ListCharactersUseCase);

    const loadInitialData = async () => {
      const comicsData = await listAllComics.execute();
      setCharacter(comicsData);
      setLoading(false);
    };
    loadInitialData();
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, loading }}>
      {children}
    </CharactersContext.Provider>
  );
};
