import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

export default function Weekly({ weatherData }) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.text}>{item.day.toUpperCase()}</Text>

        <Image style={styles.icon} source={{ uri: item.icon }} />

        <Text style={styles.text}>{item.description}</Text>
      </View>

      <View>
        <Text style={styles.text}>Min Temp: {item.temp.min}&deg;C</Text>

        <Text style={styles.text}>Max Temp: {item.temp.max}&deg;C</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      style={styles.weekly}
      data={weatherData}
      renderItem={renderItem}
      keyExtractor={index => (index + Math.random()).toString()}
    />
  );
}

const styles = StyleSheet.create({
  weekly: {
    marginTop: 10,
    width: '90%',
  },
  item: {
    height: 100,
    backgroundColor: '#00B0FF',
    width: '100%',
    marginBottom: 7,
    padding: 20,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    height: 40,
    width: 40,
  },
});
