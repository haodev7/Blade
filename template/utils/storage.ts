import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadFromStorage(key: string) {
  try {
    const almostThere: any = await AsyncStorage.getItem(key);
    return JSON.parse(almostThere);
  } catch (error) {
    console.log('AsyncStorage loading error: ', error);
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveToStorage(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log('AsyncStorage saving error: ', error);
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function removeFromStorage(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('AsyncStorage removing error: ', error);
  }
}

/**
 * Burn it all to the ground.
 */
export async function clear() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('AsyncStorage saving error: ', error);
  }
}

export async function loadAllKeysFromStorage() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return Promise.all(keys.map(key => loadFromStorage(key)));
  } catch (error) {
    console.error(error);
    return null;
  }
}
