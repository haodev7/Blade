import { onSignIn } from '@app/services/auth';
import { storage } from '@app/utils';
import proxyWithPersist, { PersistStrategy } from 'valtio-persist';
import { derive as deriveCreate, subscribeKey } from 'valtio/utils';

const proxy = proxyWithPersist({
  // must be unique, files/paths will be created with this prefix
  name: '@user_persist',
  initialState: {
    access_token: '',
    refresh_token: '',
  },
  persistStrategies: PersistStrategy.SingleFile,
  version: 0,
  migrations: {},
  // see "Storage Engine" section below
  getStorage: () => storage,
});

subscribeKey(proxy._persist, 'loaded', loaded => {
  if (loaded) {
    console.log('@user_persist safe loaded');
  }
});

const derive = deriveCreate({
  isSigned: get => get(proxy).access_token !== '',
});

/* defined func in here */
const signIn = async (username: string, password: string) => {
  /* your code */
  const result = await onSignIn(username, password);
  // if result.success is true
  proxy.access_token = 'this is a access_token';
  return result;
};

const signOut = async () => {
  proxy.access_token = '';
};
const user = {
  proxy,
  derive,
  signIn,
  signOut,
};

export default user;
