import { useEffect, useState } from 'react';

import IComicDTO from '@domain/dto/IComicDTO';

import { container } from 'tsyringe';
import ListComicsUseCase from '@adapters/usecases/ListComicsUseCase';

const useListComicWithLimit = (amount: number) => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [comics, setComics] = useState<IComicDTO[]>([] as IComicDTO[]);

  const listComics = container.resolve(ListComicsUseCase);

  useEffect(() => {
    const seriesData = async () => {
      return await listComics.execute(amount).then(result => setComics([...result]));
    }
    seriesData();
    setLoading(false);
  }, [])

  return { comics, loading};
}

export default useListComicWithLimit;