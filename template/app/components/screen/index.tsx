import React, { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  ViewProps,
} from 'react-native';

interface ScreenWithScrollViewProps extends ScrollViewProps, PropsWithChildren {
  children: React.ReactNode;
  isTab?: boolean;
}
interface ScreenWithOutScrollViewProps extends ViewProps, PropsWithChildren {
  children: React.ReactNode;
  isTab?: boolean;
}
function Screen({
  children,
  isTab,
}: ScreenWithScrollViewProps | ScreenWithOutScrollViewProps) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  content: {
    padding: 14,
  },
});
