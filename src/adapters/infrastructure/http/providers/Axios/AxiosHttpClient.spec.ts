import { AxiosHttpClient } from '@adapters/infrastructure/http/providers/Axios/AxiosHttpClient';

import axios from 'axios';
import { mockAxios, mockHttpResponse } from '../../mocks/MockAxios';
import { mockHttpRequest, mockHttpRequestParams } from '../../mocks/MockHttpClient';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockHttpRequest();
    const { sut, mockedAxios } = makeSut();

    await sut.request(request);

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.data,
      headers: request.headers,
      method: request.method,
    });
  });

  test('Should return correct response', async () => {
    const { sut, mockedAxios } = makeSut();

    const httpResponse = await sut.request(mockHttpRequest());
    const axiosResponse = await mockedAxios.request.mock.results[0].value;

    expect(httpResponse).toEqual({
      status: axiosResponse.status,
      data: axiosResponse.data,
    });
  });

  test('Should return correct error', () => {
    const { sut, mockedAxios } = makeSut();
    mockedAxios.request.mockRejectedValueOnce({
      response: mockHttpResponse(),
    });

    const promise = sut.request(mockHttpRequest());

    expect(promise).toEqual(mockedAxios.request.mock.results[0].value);
  });

  test('Should be able to request with params', () => {
    const { sut, mockedAxios } = makeSut();
    mockedAxios.request.mockRejectedValueOnce({
      response: mockHttpResponse(),
    });

    const promise = sut.request(mockHttpRequestParams());

    expect(promise).toEqual(mockedAxios.request.mock.results[0].value);
  });
});
