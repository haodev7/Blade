import { common } from '@proxies';
import { delay } from '@utils';
import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
import { axiosDefaultConfig, helperDefault, ResponseType } from './config';
import { METHODS, RETRY_COUNT } from './constants';
import { handleError } from './utils';

// Create axios instances
const client = axios.create(axiosDefaultConfig);

// Get access token and update config each time api calling
const getAccessToken = async () => {}; // get token from store

const refreshAccessToken = async () => {
  //await get new token
  const newAccessToken = await delay(1000);
  client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
}; // refresh token and save it to storage

client.interceptors.request.use(
  async config => {
    console.log('Request with access token!');
    const access_token = await getAccessToken();
    const newConfig = { ...config };
    newConfig.headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return newConfig;
  },
  error => {
    Promise.reject(error);
  },
);

// Refresh token when status code of response is 401 vs 403
client.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      console.log('Starting refresh token!');
      originalRequest._retry = true;
      await refreshAccessToken();
      return client(originalRequest);
    }
    return Promise.reject(error);
  },
);

// Set retry count and delay between request
axiosRetry(client, {
  retryDelay: axiosRetry.exponentialDelay,
  retries: RETRY_COUNT,
});

// method = 'GET' | 'PUT' | 'POST' | 'DELETE'
interface APIRequestOptions {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  endpoint: string;
  body?: any;
  requestConfig?: AxiosRequestConfig<any> | undefined;
  helper?: any;
}
export const APIRequest = async ({
  method = 'GET',
  endpoint = '',
  body,
  requestConfig,
  helper,
}: APIRequestOptions): Promise<ResponseType> => {
  const helperConfig = {
    ...helperDefault,
    ...helper,
  };
  const { setLoading } = common;
  const request = () => {
    switch (method) {
      case METHODS.GET:
        return client.get(endpoint, requestConfig);
      case METHODS.PUT:
        return client.put(endpoint, body, requestConfig);
      case METHODS.POST:
        return client.post(endpoint, body, requestConfig);
      case METHODS.DELETE:
        return client.delete(endpoint, requestConfig);
      default:
        throw Error('METHOD invalid!!!');
    }
  };

  try {
    helperConfig.loadingEffectEnabled && setLoading(true);
    const response = await request?.();
    const { data } = response;
    console.log({ success: true, data });
    return { success: true, data };
  } catch (error) {
    helperConfig.loadingEffectEnabled && setLoading(false);
    return handleError(error, helperConfig);
  } finally {
    helperConfig.loadingEffectEnabled && setLoading(false);
  }
};
