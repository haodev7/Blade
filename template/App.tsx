import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { Auth, Main } from '@navigators';

import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useSnapshot } from 'valtio';
import { user } from '@proxies';
import { GlobalLoading } from '@components';
import { underive } from 'valtio/utils';

function AppStack() {
  const { isSigned } = useSnapshot(user.derive, { sync: true });
  useEffect(() => {
    return () => underive(user.derive);
  }, []);
  return isSigned ? <Main /> : <Auth />;
}

export default function App() {
  const scheme = useColorScheme();
  useEffect(() => {
    const onShowSplash = setTimeout(SplashScreen.hide, 500);
    return () => clearTimeout(onShowSplash);
  }, []);
  return (
    <ThemeProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppStack />
      </NavigationContainer>
      <GlobalLoading />
    </ThemeProvider>
  );
}
