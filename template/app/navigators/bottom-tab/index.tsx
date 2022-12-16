import * as React from 'react';
import { HomeScreen, SettingsScreen } from '@screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function BottomTab() {
  const renderTabBarIcon = (props: { color: string; name: string }) => (
    <Icon name={props.name} color={props.color} size={26} />
  );
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => renderTabBarIcon({ color, name: 'home' }),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) =>
            renderTabBarIcon({ color, name: 'settings' }),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
