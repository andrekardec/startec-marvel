import { ICreator } from '@domain/types/ICreator';
import { IImage } from '@domain/types/IImage';

export default interface IComicDTO {
  readonly id: number;
  readonly title: string;
  readonly modified: Date;
  readonly thumbnail: IImage;
  readonly images: IImage[];
  readonly creators?: ICreator[];
  readonly prices?: any;
  readonly series?: any;
  readonly stories?: any;
}
