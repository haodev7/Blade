import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadFromStorage(key: string) {
  try {
    const almostThere = await AsyncStorage.getItem(key);
    return almostThere || null;
  } catch (error) {
    console.log('AsyncStorage loading error: ', error);
    return null;
  }
}

export async function saveToStorage(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log('AsyncStorage saving error: ', error);
    return false;
  }
}

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
    return await AsyncStorage.getAllKeys();
  } catch {
    return null;
  }
}
