import md5 from 'md5';
import { ICredentials } from './ICredentials';

const { API_MARVEL_BASE_URL } = process.env;
const { API_MARVEL_PRIVATE_KEY } = process.env;
const { API_MARVEL_PUBLIC_KEY } = process.env;

const TIMESTAMP = Number(new Date());

const HASH = md5(TIMESTAMP + API_MARVEL_PRIVATE_KEY! + API_MARVEL_PUBLIC_KEY!);

export default {
  baseUrl: API_MARVEL_BASE_URL,
  authorizationHash: `ts=${TIMESTAMP}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${HASH}`,
} as ICredentials;
