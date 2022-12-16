import { Alert, AlertButton, AlertOptions } from 'react-native';

/* defined func in here */
export const showDialog = async (
  title: string,
  desc: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
) => {
  Alert.alert(title, desc, buttons, options);
};
