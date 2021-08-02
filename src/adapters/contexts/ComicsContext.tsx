import IComicDTO from '@domain/dto/IComicDTO';
import { createContext } from 'use-context-selector';

type ComicsContextData = {
    comics: IComicDTO[];
    loading: boolean;
};

export const ComicsContext = createContext<ComicsContextData>({} as ComicsContextData);

export default ComicsContext;
