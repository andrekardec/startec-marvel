import ListComicsUseCase from './ListComicsUseCase';
import { AxiosHttpClient } from '@adapters/infrastructure/http/providers/Axios/AxiosHttpClient';

let httpClient : AxiosHttpClient;
let listComicsUseCase : ListComicsUseCase;

beforeEach(() => {
  httpClient = new AxiosHttpClient();
  listComicsUseCase = new ListComicsUseCase(httpClient);
});

test("Should fetch data with limit if amount is set", async () => {
    const response = await listComicsUseCase.execute(12);

    expect(response).not.toBeNull();
});

test("Should be able to return with no limit set", async () => {
  const response = await listComicsUseCase.execute();

  expect(response).not.toBeNull();
});

test("Should return an array with more than one position", async () => {
  const response = await listComicsUseCase.execute();
  expect(response.length).toBeGreaterThan(1);
  expect(response).not.toBeUndefined();
});

