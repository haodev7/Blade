import React, { type PropsWithChildren, useState } from 'react';
import { Screen } from '@components';
import { Button, Input, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import Config from 'react-native-config';
import { NavigationProp } from '@react-navigation/native';

const emailIcon = {
  type: 'MaterialCommunityIcons',
  name: 'email',
  size: 24,
  color: 'rgba(0,0,0,0.6)',
};
const passwordIcon = {
  type: 'MaterialCommunityIcons',
  name: 'lock',
  size: 24,
  color: 'rgba(0,0,0,0.52)',
};
const SignInScreen: React.FC<
  PropsWithChildren<{
    navigation: NavigationProp<ReactNavigation.RootParamList>;
  }>
> = ({ navigation }) => {
  const [loginInfo, setLoginInfo] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: '',
  });
  const onChangeLoginInfo = (subState: any) => {
    setLoginInfo(current => ({ ...current, ...subState }));
  };

  const onSubmit = () => {
    const { username, password } = loginInfo;
  };

  return (
    <Screen>
      <Text style={styles.title}>
        BLADE TEMPLATE {'\n'}ENV: {Config.ENV}
      </Text>
      <Input
        leftIcon={emailIcon}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Enter your email"
        inputStyle={styles.input}
        errorMessage=""
        value={loginInfo.username}
        onChangeText={username => onChangeLoginInfo({ username })}
      />
      <Input
        leftIcon={passwordIcon}
        placeholder="Enter your password"
        inputStyle={styles.input}
        errorMessage=""
        value={loginInfo.password}
        onChangeText={password => onChangeLoginInfo({ password })}
        secureTextEntry
      />
      <Button
        disabled={false}
        title="Sign In"
        onPress={onSubmit}
        containerStyle={styles.button}
      />
      <View style={styles.signupLink}>
        <Text style={styles.text}>Do not have an Account?</Text>
        <Text style={styles.link}>Sign Up now!</Text>
      </View>
    </Screen>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f78c5',
    marginBottom: 28,
  },
  input: {
    fontSize: 16,
    color: '#404040',
  },
  text: {
    color: '#404040',
  },
  button: {
    marginTop: 24,
  },
  signupLink: {
    marginTop: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  link: {
    color: '#5a90c7',
    fontWeight: 'bold',
  },
});
