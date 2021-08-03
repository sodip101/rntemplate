/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ThemeToogle from '../components/themeSwitch';

export default function Settings({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={32}
          style={{ marginBottom: 7 }}
          color="#00B0FF"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ThemeToogle />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    margin: 20,
  },
  header: {
    width: '100%',
  },
});
