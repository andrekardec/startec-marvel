import {
  IHttpRequest,
} from '@adapters/infrastructure/http/contracts/IHttpClient';

import faker from 'faker';

export const mockHttpRequest = (): IHttpRequest =>
  ({
    url: faker.internet.url(),
    method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
    data: faker.random.objectElement(),
    headers: faker.random.objectElement(),
  });

export const mockHttpRequestParams = (): IHttpRequest =>
  ({
    url: faker.internet.url(),
    method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
    data: faker.random.objectElement(),
    headers: faker.random.objectElement(),
    params: '?limit=2&oneMoreParam',
  });
