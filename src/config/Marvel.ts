import md5 from 'md5';
import { ICredentials } from './ICredentials';

const API_MARVEL_BASE_URL = 'http://gateway.marvel.com/v1/public';
const API_MARVEL_PRIVATE_KEY = '4fcff36cfecb40d3af9f98748ece221d707ead27';
const API_MARVEL_PUBLIC_KEY = 'cad113a44c9ebdc720b50483736a90c5';

const TIMESTAMP = Number(new Date());

const HASH = md5(TIMESTAMP + API_MARVEL_PRIVATE_KEY! + API_MARVEL_PUBLIC_KEY!);

export default {
    baseUrl: API_MARVEL_BASE_URL,
    authorizationHash: `ts=${TIMESTAMP}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${HASH}`,
} as ICredentials;

