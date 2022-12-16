import {
  loadAllKeysFromStorage,
  loadFromStorage,
  removeFromStorage,
  saveToStorage,
} from './storage';

export const storage = {
  getItem: (name: string) => loadFromStorage(name),
  setItem: (name: string, value: any) => saveToStorage(name, value),
  removeItem: (name: any) => removeFromStorage(name),
  getAllKeys: () => loadAllKeysFromStorage(),
};
