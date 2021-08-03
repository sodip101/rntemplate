import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MenuButton({ navigation, color }) {
  return (
    <View>
      <Icon
        name="menu"
        size={34}
        color={color}
        onPress={() => navigation.openDrawer()}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ paddingLeft: 16 }}
      />
    </View>
  );
}
