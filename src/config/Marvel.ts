import md5 from 'md5';
import { ICredentials } from './ICredentials';

const API_MARVEL_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_MARVEL_PRIVATE_KEY = '4bea677559e559132a6a1b595a9c4d3837050d32';
const API_MARVEL_PUBLIC_KEY = 'd778de677bb9a639364bbfdf40379844';

const TIMESTAMP = Number(new Date());

const HASH = md5(TIMESTAMP + API_MARVEL_PRIVATE_KEY! + API_MARVEL_PUBLIC_KEY!);

export default {
  baseUrl: API_MARVEL_BASE_URL,
  authorizationHash: `ts=${TIMESTAMP}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${HASH}`,
} as ICredentials;
