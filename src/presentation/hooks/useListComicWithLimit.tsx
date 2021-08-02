/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from 'react';

import IComicDTO from '@domain/dto/IComicDTO';

import { container } from 'tsyringe';
import ListComicsUseCase from '@adapters/usecases/ListComicsUseCase';

const useListComicWithLimit = (amount: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [comics, setComics] = useState<IComicDTO[]>([] as IComicDTO[]);

  useEffect(() => {
    const listComics = container.resolve(ListComicsUseCase);

    const seriesData = async () =>
      listComics.execute(amount).then((result) =>
        setComics([...result]));
    seriesData();
    setLoading(false);
  }, [amount]);

  return { comics, loading };
};

export default useListComicWithLimit;
