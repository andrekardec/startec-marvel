import { container } from 'tsyringe';
import { IHttpClient } from '../contracts/IHttpClient';
import { AxiosHttpClient } from './Axios/AxiosHttpClient';

container.registerSingleton<IHttpClient>('HttpClient', AxiosHttpClient);