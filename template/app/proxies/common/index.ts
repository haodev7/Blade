import { AlertButton, AlertOptions } from 'react-native';
import { proxy as proxyCreate } from 'valtio';
import { derive as deriveCreate, subscribeKey } from 'valtio/utils';

interface Popup {
  kind: 'AUTHENTICATION' | 'NO_NETWORK' | 'MANUAL';
  title?: string;
  desc: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
}

const proxy = proxyCreate({
  isLoading: false,
  popup: <Popup[] | undefined>[],
});

const stopObservingPopup = subscribeKey(proxy, 'popup', popup => {
  console.log(popup);
});

const derive = deriveCreate({});

/* defined func in here */
const setLoading = async (isLoading: boolean) => {
  /* your code */
  proxy.isLoading = isLoading;
};

const common = {
  proxy,
  derive,
  setLoading,
  stopObservingPopup,
};

export default common;
