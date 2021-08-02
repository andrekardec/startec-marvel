import IComicDTO from '@domain/dto/IComicDTO';
import { createContext } from 'use-context-selector';

type ComicContextData = {
    loading: boolean;
    error: NotFound;
    comic: IComicDTO;
};

export const ComicContext = createContext<ComicContextData>({} as ComicContextData);

export default ComicContext;
