import React from 'react';
import { Text, ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loading({ message }) {
  return (
    <>
      <View style={styles.root}>
        <ActivityIndicator size="large" color="#00B0FF" />

        <Text style={styles.message}>{message.toUpperCase()}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: '#00B0FF',
  },
});
