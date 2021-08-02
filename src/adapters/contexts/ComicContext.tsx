import IComicDTO from '@domain/dto/IComicDTO';
import { NotFound } from '@domain/types/INotFound';
import { createContext } from 'use-context-selector';

export type ComicContextData = {
    loading: boolean;
    error: NotFound;
    comic: IComicDTO;
};

export const ComicContext = createContext<ComicContextData>({} as ComicContextData);

export default ComicContext;
