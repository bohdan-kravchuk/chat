import axios from 'axios';
import { env } from 'env';

const makeRequest = (method) => async (url, payload, reqConfig) => {
  const config = {
    method,
    baseURL: env.apiUrl,
    url,
    headers: {
      'Access-Control-Allow-Origin': window.location.origin,
    },
    ...(payload && { data: payload }),
    ...reqConfig,
  };
  const res = await axios(config);
  return res?.data;
};

const getRequest = makeRequest('GET');

const makeGetRequest = (url, reqConfig) => getRequest(url, undefined, reqConfig);

export const api = {
  get: makeGetRequest,
  post: makeRequest('POST'),
  put: makeRequest('PUT'),
  delete: makeRequest('DELETE'),
};
