import { container } from 'tsyringe';
import marvelCredentials from '@config/Marvel';
import { IHttpClient } from '../contracts/IHttpClient';
import { AxiosHttpClient } from './Axios/AxiosHttpClient';

container.register('Credentials', { useValue: marvelCredentials });

container.registerSingleton<IHttpClient>('HttpClient', AxiosHttpClient);
