import IComicDTO from '@domain/dto/IComicDTO';

export interface IListOneComicUseCase {
  execute: (id: number) => Promise<IComicDTO | undefined>;
}
