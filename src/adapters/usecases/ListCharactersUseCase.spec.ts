import { AxiosHttpClient } from '@adapters/infrastructure/http/providers/Axios/AxiosHttpClient';
import ListCharactersUseCase from './ListCharactersUseCase';

let httpClient : AxiosHttpClient;
let listCharactersUseCase : ListCharactersUseCase;

beforeEach(() => {
  httpClient = new AxiosHttpClient();
  listCharactersUseCase = new ListCharactersUseCase(httpClient);
});

test('Should be able to return results', async () => {
  const response = await listCharactersUseCase.execute();

  expect(response).not.toBeNull();
});

test('Should return an array with more than one position', async () => {
  const response = await listCharactersUseCase.execute();
  expect(response.length).toBeGreaterThan(1);
  expect(response).not.toBeUndefined();
});
