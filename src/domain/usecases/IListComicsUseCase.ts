import IComicDTO from '@domain/dto/IComicDTO';

export interface IListComicsUseCase{
  execute: (amount?: number) => Promise<IComicDTO[]>;
}
