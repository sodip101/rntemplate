import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultCity from '../screens/defaultCity';
import MenuButton from '../components/menuBtn';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

export default function StackNav({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNav}
        options={{
          headerTransparent: false,
          headerLeft: () => (
            <MenuButton navigation={navigation} color="#00B0FF" />
          ),
          title: '',
        }}
      />
      <Stack.Screen name="City" component={DefaultCity} />
    </Stack.Navigator>
  );
}
