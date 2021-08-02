/* eslint-disable react/prop-types */
import ListOneCharacterUseCase from '@adapters/usecases/ListOneCharacterUseCase';
import ICharacterDTO from '@domain/dto/ICharacterDTO';
import { NotFound } from '@domain/types/INotFound';
import { RouteParams } from '@domain/types/IRouteParams';

import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { container } from 'tsyringe';
import CharacterContext from '../CharacterContext';

export const CharacterProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<ICharacterDTO>({} as ICharacterDTO);
  const [error, setError] = useState<NotFound>({} as NotFound);

  const params = useParams<RouteParams>();
  // eslint-disable-next-line radix
  const requestedCharacter = parseInt(Object.values(params)[0]);

  useEffect(() => {
    const listCharacter = container.resolve(ListOneCharacterUseCase);
    const listCharacterByid = async () => {
      const characterData = await listCharacter.execute(requestedCharacter);
      if (characterData) {
        setCharacter(characterData);
        setLoading(false);
      }
      setError({ code: 404, error: 'Not found' });
      setLoading(false);
    };
    listCharacterByid();
  }, [requestedCharacter]);

  return (
    <CharacterContext.Provider value={{ character, loading, error }}>
      {children}
    </CharacterContext.Provider>
  );
};
