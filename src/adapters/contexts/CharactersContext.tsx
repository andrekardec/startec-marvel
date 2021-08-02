import ICharacterDTO from '@domain/dto/ICharacterDTO';
import { createContext } from 'use-context-selector';

type CharactersContextData = {
    characters: ICharacterDTO[];
    loading: boolean;
};

export const CharactersContext = createContext<CharactersContextData>({} as CharactersContextData);

export default CharactersContext;
