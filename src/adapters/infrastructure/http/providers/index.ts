import { container } from 'tsyringe';
import marvelCredentials from '@config/Marvel';
import { IHttpClient } from '../contracts/IHttpClient';
import { AxiosHttpClient } from './Axios/AxiosHttpClient';


container.registerSingleton<IHttpClient>('HttpClient', AxiosHttpClient);