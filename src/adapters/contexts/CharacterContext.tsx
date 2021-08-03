import ICharacterDTO from '@domain/dto/ICharacterDTO';
import { NotFound } from '@domain/types/INotFound';
import { createContext } from 'use-context-selector';

type CharacterContextData = {
    loading: boolean;
    error: NotFound;
    character: ICharacterDTO;
};

export const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

export default CharacterContext;
