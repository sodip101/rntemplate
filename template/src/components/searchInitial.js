import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InitialMessage() {
  return (
    <>
      <View style={styles.root}>
        <Text style={styles.message}>Search City to View Weather Info</Text>
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
  },
});
