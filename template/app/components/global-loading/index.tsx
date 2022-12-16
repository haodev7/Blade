import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';
import { useSnapshot } from 'valtio';
import { common } from '@proxies';
import { indicator } from '@assets/animations';
const GlobalLoading = () => {
  const { isLoading } = useSnapshot(common.proxy);
  return (
    <Modal
      visible={isLoading}
      statusBarTranslucent
      animationType="fade"
      transparent
    >
      <View style={styles.container}>
        <Lottie source={indicator} autoPlay loop style={styles.icon} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.12)',
  },
  icon: {
    width: 80,
    height: 80,
  },
});
export default GlobalLoading;
