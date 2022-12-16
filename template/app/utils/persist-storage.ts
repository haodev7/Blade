import {
  loadAllKeysFromStorage,
  loadFromStorage,
  removeFromStorage,
  saveToStorage,
} from './asyns-storage';
import type { ProxyPersistStorageEngine } from 'valtio-persist';

export const storage: ProxyPersistStorageEngine = {
  getItem: loadFromStorage,
  setItem: (name: string, value: string) => {
    saveToStorage(name, value);
  },
  removeItem: removeFromStorage,
  getAllKeys: async () => {
    const result = await loadAllKeysFromStorage();
    const newResult = result?.map(element => element) || [];
    return newResult;
  },
};
