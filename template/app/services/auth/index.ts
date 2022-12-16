import { APIRequest } from '@api';
import { delay } from '@utils';

export const onSignIn = async (username: string, password: string) => {
  // fake calling
  await delay(2000);
  const { success, data, message } = await APIRequest({
    method: 'POST',
    endpoint: '/posts',
    body: [
      {
        userId: 3,
        id: 3,
        title: 'haodev7',
      },
    ],
  });
  return { success, data, message };
};
