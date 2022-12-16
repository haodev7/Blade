import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../bottom-tab';

const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      {/* Add screens without bottomtab below */}
    </Stack.Navigator>
  );
}

export default MainStack;
