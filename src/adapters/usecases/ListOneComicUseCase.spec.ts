import { AxiosHttpClient } from '@adapters/infrastructure/http/providers/Axios/AxiosHttpClient';
import ListOneComicUseCase from './ListOneComicUseCase';

let httpClient : AxiosHttpClient;
let listOneComicUseCase : ListOneComicUseCase;

const id = 93056;
const nonExistingId = 515613135143513;

beforeEach(() => {
  httpClient = new AxiosHttpClient();
  listOneComicUseCase = new ListOneComicUseCase(httpClient);
});

test('Should return undefined if id doesn\'t exist', async () => {
  const response = await listOneComicUseCase.execute(nonExistingId);

  expect(response).toBeUndefined();
});

test('Should be able to return comic if exists', async () => {
  const response = await listOneComicUseCase.execute(id);

  expect(response).not.toBeNull();
});

test('Should return maximum two creators', async () => {
  const response = await listOneComicUseCase.execute(id);
  expect(response!.creators!.length).toBeLessThanOrEqual(2);
});

test('Should return just one result', async () => {
  const response = await listOneComicUseCase.execute(id);
  expect(response).not.toBe(Array);
});
