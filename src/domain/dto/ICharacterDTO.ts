import { IImage } from '@domain/types/IImage';

export default interface ICharacterDTO {
  readonly id: number;
  readonly name: string;
  readonly description?: string;
  readonly modified: Date;
  readonly thumbnail: IImage;
}
