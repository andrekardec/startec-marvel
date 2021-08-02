import ICharacterDTO from '@domain/dto/ICharacterDTO';

export interface IListOneCharacterUseCase {
  execute: (id: number) => Promise<ICharacterDTO | undefined>;
}
