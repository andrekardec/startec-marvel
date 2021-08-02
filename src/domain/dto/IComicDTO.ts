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
