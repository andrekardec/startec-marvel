import 'reflect-metadata';
import { inject, singleton } from 'tsyringe';
import { IHttpRequest, IHttpClient } from '@adapters/infrastructure/http/contracts/IHttpClient';
import axios, { AxiosResponse } from 'axios';
import { ICredentials } from '@config/ICredentials';

@singleton()
export class AxiosHttpClient implements IHttpClient {
  private authKeys?: ICredentials;

  private marvelParams : string | undefined = undefined;

  constructor(
    @inject('Credentials') authKeys?: ICredentials,
  ) {
    this.authKeys = authKeys;
  }

  async request(options: IHttpRequest): Promise<AxiosResponse> {
    let axiosResponse: AxiosResponse;

    if (options.params) {
      this.marvelParams = `?${options.params}&dateDescriptor=lastWeek&`;
    } else {
      this.marvelParams = '?dateDescriptor=thisWeek&';
    }

    if (this.authKeys) {
      try {
        axiosResponse = await axios.request({
          url: `${this.authKeys.baseUrl}${options.url}${this.marvelParams}${this.authKeys.authorizationHash}`,
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
}
