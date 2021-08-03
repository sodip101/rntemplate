import React from 'react';
import { Text, Switch, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { toogleTheme } from '../redux/theme';

export default function ThemeToogle() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.theme.darkTheme);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Theme</Text>
      <Switch
        thumbColor="white"
        value={darkTheme}
        onValueChange={() => dispatch(toogleTheme())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '88%',
    backgroundColor: '#00B0FF',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
