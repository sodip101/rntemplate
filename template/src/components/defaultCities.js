import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { deleteDefault } from '../redux/weather';

export default function DefaultCities({ defaultCitiesData, navigation }) {
  const dispatch = useDispatch();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.city}
      onPress={() => navigation.navigate('City', { weatherData: item })}>
      <View>
        <Text style={styles.text}>{item.city}</Text>

        <Text style={styles.text}>{item.current.temp}&deg;C</Text>

        <Image style={styles.icon} source={{ uri: item.current.icon }} />

        <Text style={styles.text}>
          {item.current.description.toUpperCase()}
        </Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(deleteDefault(item.city))}>
        <Icon size={32} color="white" name="cancel" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <FlatList
      style={styles.cities}
      data={defaultCitiesData}
      renderItem={renderItem}
      keyExtractor={index => index + Math.random()}
    />
  );
}

const styles = StyleSheet.create({
  cities: {
    marginTop: 10,
    width: '90%',
  },
  city: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00B0FF',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 10,
  },
  icon: {
    height: 50,
    width: 70,
  },
});
