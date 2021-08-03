import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Disconnected() {
  return (
    <View style={styles.root}>
      <Icon size={34} name="wifi-off" />
      <Text>You are currently disconnected from the internet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadBtn: {
    width: '30%',
    padding: 7,
  },
});
