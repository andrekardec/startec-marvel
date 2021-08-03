import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import IComicDTO from '@domain/dto/IComicDTO';
import { IHttpClient } from '@adapters/infrastructure/http/contracts/IHttpClient';
import { IListOneComicUseCase } from '@domain/usecases/IListOneComicUseCase';

@injectable()
class ListOneComicUseCase implements IListOneComicUseCase {
  private comics: IComicDTO | undefined = undefined;

  constructor(
    @inject('HttpClient')
    readonly httpClient: IHttpClient,
  ) {
    this.httpClient = httpClient;
  }

  async execute(id: number): Promise<IComicDTO | undefined> {
    const response = await this.httpClient.request({
      url: `/comics/${id}`,
      method: 'GET',
    });
    if (response.status !== 404) {
      const creatorsData = response.data.data.results[0].creators.items.map((items) =>
        items);

      const creators = creatorsData.slice(0, 2).map((({ name, role }) =>
        ({ name, role })));

      this.comics = response.data.data.results.map((({
        // eslint-disable-next-line @typescript-eslint/no-shadow
        id, title, modified, resourceURI, thumbnail, images, prices, series, stories,
      }) =>
        ({
          id, title, modified, resourceURI, thumbnail, images, prices, series, stories, creators,
        })));

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.comics![0];
    }

    return undefined;
  }
}
export default ListOneComicUseCase;
