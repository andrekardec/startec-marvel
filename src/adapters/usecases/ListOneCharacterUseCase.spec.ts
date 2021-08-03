import { AxiosHttpClient } from '@adapters/infrastructure/http/providers/Axios/AxiosHttpClient';
import ListOneCharacterUseCase from './ListOneCharacterUseCase';

let httpClient : AxiosHttpClient;
let listOneCharacterUseCase : ListOneCharacterUseCase;

const id = 1011334;
const nonExistingId = 515613135143513;

beforeEach(() => {
  httpClient = new AxiosHttpClient();
  listOneCharacterUseCase = new ListOneCharacterUseCase(httpClient);
});

test('Should return character undefined if id doesn\'t exist', async () => {
  const response = await listOneCharacterUseCase.execute(nonExistingId);

  expect(response).toBeUndefined();
});

test('Should be able to return character if exists', async () => {
  const response = await listOneCharacterUseCase.execute(id);

  expect(response).not.toBeNull();
});

test('Should return just one result', async () => {
  const response = await listOneCharacterUseCase.execute(id);
  expect(response).not.toBe(Array);
});
