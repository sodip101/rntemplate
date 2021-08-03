import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Search from '../screens/search';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#00B0FF',
        labelStyle: { fontSize: 12 },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon color={focused ? '#00B0FF' : 'gray'} name="home" size={32} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              color={focused ? '#00B0FF' : 'gray'}
              name="search"
              size={32}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
