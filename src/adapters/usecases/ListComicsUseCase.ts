import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { IListComicsUseCase } from '@domain/usecases/IListComicsUseCase';
import IComicDTO from '@domain/dto/IComicDTO';
import { IHttpClient } from '@adapters/infrastructure/http/contracts/IHttpClient';

@injectable()
class ListComicsUseCase implements IListComicsUseCase {
  private comics: IComicDTO[] = [];

  private params: string | undefined = undefined;

  constructor(
    @inject('HttpClient')
    readonly httpClient: IHttpClient,
  ) {
    this.httpClient = httpClient;
  }

  async execute(amount?: number): Promise<IComicDTO[]> {
    if (amount) {
      this.params = `&offset=9&limit=${amount}`;
    } else {
      this.params = undefined;
    }

    const { data } = await this.httpClient.request({
      url: '/comics',
      method: 'GET',
      params: this.params,
    });
    this.comics = data.data.results.map(
      ({
        id, title, resourceURI, thumbnail, images,
      }) =>
        ({
          id,
          title,
          resourceURI,
          thumbnail,
          images,
        }),
    );

    return this.comics;
  }
}

export default ListComicsUseCase;
