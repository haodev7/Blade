import { AxiosError } from 'axios';
import { ResponseType } from '../config';

export const handleError = (
  error: AxiosError | Error | any,
  options: any,
): ResponseType => {
  if (error.request?.status === 0) {
    // The request was made but no response was received
    console.log(
      'Error with CONNECTION or NETWORK ERROR. AXIOS STATUS CODE: ',
      error.request?.status,
    );
  } else if (typeof error.response.status === 'number') {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(
      'Error with FALLS OUT OF THE RANGE OF 2XX. STATUS CODE: ',
      error.response?.status,
    );
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error not Axios', error);
  }

  return {
    success: false,
    message: error.message,
  };
};
