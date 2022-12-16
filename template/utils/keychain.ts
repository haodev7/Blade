import * as ReactNativeKeychain from 'react-native-keychain';

/**
 * Saves some credentials securely.
 *
 * @param username The username
 * @param password The password
 */
export async function saveToKeychain(username: string, password: string) {
  return ReactNativeKeychain.setGenericPassword(username, password);
}

/**
 * Loads credentials that were already saved.
 *
 * @param server The server that these creds are for
 */
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

/**
 * Resets any existing credentials for the given server.
 *
 * @param server The server which has these creds
 */
export async function resetKeychain() {
  const result = await ReactNativeKeychain.resetGenericPassword();
  return result;
}
