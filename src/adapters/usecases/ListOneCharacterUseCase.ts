import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { IHttpClient } from '@adapters/infrastructure/http/contracts/IHttpClient';
import { IListOneCharacterUseCase } from '@domain/usecases/IListOneCharacterUseCase';
import ICharacterDTO from '@domain/dto/ICharacterDTO';

@injectable()
class ListOneCharacterUseCase implements IListOneCharacterUseCase {
  private character: ICharacterDTO | undefined = undefined;

  constructor(
    @inject('HttpClient')
    readonly httpClient: IHttpClient,
  ) {
    this.httpClient = httpClient;
  }

  async execute(id: number): Promise<ICharacterDTO | undefined> {
    const response = await this.httpClient.request({
      url: `/characters/${id}`,
      method: 'GET',
    });
    if (response.status !== 404) {
      this.character = response.data.data.results.map((({
        // eslint-disable-next-line @typescript-eslint/no-shadow
        id, name,
        thumbnail,
        description,
        modified,
      }) =>
        ({
          id,
          name,
          thumbnail,
          description,
          modified,
        })));

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.character![0];
    }

    return undefined;
  }
}
export default ListOneCharacterUseCase;
