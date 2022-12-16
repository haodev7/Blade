import Config from 'react-native-config';
import { TIME_OUT } from '../constants';

// Axios default config
export const axiosDefaultConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: TIME_OUT,
  headers: { Accept: 'application/json' },
};

// Help before, during, and after of a request
export const helperDefault = {
  showErrorPopup: true,
  loadingEffectEnabled: true,
};

export enum METHOD {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export interface ResponseType {
  success: boolean;
  data?: any;
  message?: string;
}
