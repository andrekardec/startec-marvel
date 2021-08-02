/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import IComicDTO from '@domain/dto/IComicDTO';

import ListComicsUseCase from '@adapters/usecases/ListComicsUseCase';
import { container } from 'tsyringe';

import ComicsContext from '@adapters/contexts/ComicsContext';

export const ComicsContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [comics, setComics] = useState<IComicDTO[]>({} as IComicDTO[]);

  const listAllComics = container.resolve(ListComicsUseCase);

  const loadInitialData = async () => {
    const comicsData = await listAllComics.execute();
    setComics(comicsData);
    setLoading(false);
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <ComicsContext.Provider value={{ comics, loading }}>
      {children}
    </ComicsContext.Provider>
  );
};
