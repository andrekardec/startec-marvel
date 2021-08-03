import 'reflect-metadata';
import { IHttpRequest, IHttpClient } from '@adapters/infrastructure/http/contracts/IHttpClient';
import axios, { AxiosResponse } from 'axios';
import marvelCredentials from '@config/Marvel';

export class AxiosHttpClient implements IHttpClient {
  private baseUrl = marvelCredentials.baseUrl;

  private authorizationHash = marvelCredentials.authorizationHash;

  private marvelParams : string | undefined = undefined;

  async request(options: IHttpRequest): Promise<AxiosResponse> {
    let axiosResponse: AxiosResponse;

    if (options.params && options.url.includes('/comics')) {
      this.marvelParams = `?${options.params}&dateDescriptor=lastWeek&`;
    } else if (options.url.includes('/comics')) {
      this.marvelParams = '?dateDescriptor=thisWeek&';
    } else {
      this.marvelParams = '?';
    }

    if (options.data) {
      try {
        axiosResponse = await axios.request({
          url: `${options.url}`,
          method: options.method,
          data: options.data,
          headers: options.headers,
        });
      } catch (error) {
        axiosResponse = error.response;
      }
      return axiosResponse;
    }

    try {
      axiosResponse = await axios.request({
        url: `${this.baseUrl}${options.url}${this.marvelParams}${this.authorizationHash}`,
        method: options.method,
        data: options.data,
        headers: options.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }
    return axiosResponse;
  }
}
