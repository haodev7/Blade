module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './app',
          '@assets': './assets',
          '@navigators': './app/navigators',
          '@components': './app/components',
          '@screens': './app/screens/',
          '@theme': './app/theme',
          '@utils': './app/utils',
          '@proxies': './app/proxies',
          '@api': './app/services/api',
          '@services': './app/services',
        },
      },
    ],
  ],
};
