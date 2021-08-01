import {
    IHttpRequest,
    IHttpClient,
} from '@adapters/infrastructure/http/contracts/IHttpClient';

import axios, { AxiosResponse } from 'axios';

import marvel from '@config/marvel';

export class AxiosHttpClient implements IHttpClient {
    async request(options: IHttpRequest): Promise<AxiosResponse> {
        let axiosResponse: AxiosResponse;
        try {
            axiosResponse = await axios.request({
                url: `${marvel.baseUrl}${options.url}?dateDescriptor=lastWeek&${marvel.authorizationHash}`,
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
