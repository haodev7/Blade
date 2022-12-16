import React from 'react';
import { Screen } from '@components';
import { Button } from '@rneui/themed';
import Lottie from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import { user } from '@proxies';
import { home } from '@assets/animations';

function HomeScreen() {
  return (
    <Screen>
      <Lottie source={home} autoPlay loop style={styles.homeAnimation} />
      <Button title="Sign Out" onPress={async () => user.signOut()} />
    </Screen>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeAnimation: {
    height: 360,
  },
});
