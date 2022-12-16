import * as ReactNativeKeychain from 'react-native-keychain';

export async function saveToKeychain(username: string, password: string) {
  return ReactNativeKeychain.setGenericPassword(username, password);
}

export async function loadFromKeychain() {
  const creds = await ReactNativeKeychain.getGenericPassword();
  if (typeof creds === 'object') {
    return {
      username: creds.username,
      password: creds.password,
    };
  }
  return {
    username: null,
    password: null,
  };
}

export async function resetKeychain() {
  const result = await ReactNativeKeychain.resetGenericPassword();
  return result;
}
