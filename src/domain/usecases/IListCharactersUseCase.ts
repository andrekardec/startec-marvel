import ICharacterDTO from '@domain/dto/ICharacterDTO';

export interface IListCharactersUseCase{
  execute: () => Promise<ICharacterDTO[]>;
}
