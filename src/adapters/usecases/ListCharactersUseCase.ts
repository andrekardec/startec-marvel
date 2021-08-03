import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { IListCharactersUseCase } from '@domain/usecases/IListCharactersUseCase';
import { IHttpClient } from '@adapters/infrastructure/http/contracts/IHttpClient';
import ICharacterDTO from '@domain/dto/ICharacterDTO';

@injectable()
class ListCharactersUseCase implements IListCharactersUseCase {
  private characters: ICharacterDTO[] = [];

  constructor(
    @inject('HttpClient')
    readonly httpClient: IHttpClient,
  ) {
    this.httpClient = httpClient;
  }

  async execute(): Promise<ICharacterDTO[]> {
    const { data } = await this.httpClient.request({
      url: '/characters',
      method: 'GET',
    });

    this.characters = data.data.results.map(
      ({
        id, name, description, thumbnail, modified,
      }) =>
        ({
          id, name, description, thumbnail, modified,
        }),
    );

    return this.characters;
  }
}

export default ListCharactersUseCase;
