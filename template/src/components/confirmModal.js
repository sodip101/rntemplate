import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-root-toast';

import { addToDefault, getDefaultWeather } from '../redux/weather';

export default function ConfirmModal({
  modalVisible,
  setModalVisible,
  cityName,
}) {
  const defaultCitiesNames = useSelector(
    state => state.weather.defaultCitiesNames,
  );
  const dispatch = useDispatch();

  const defaultCities = useSelector(state => state.weather.defaultCitiesNames);
  const toast = message => {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };

  function checkAndAdd() {
    if (!defaultCities.includes(cityName)) {
      addToHome();
    } else {
      setModalVisible(!modalVisible);
      toast('Already added to the Home Screen!');
    }
  }
  function addToHome() {
    dispatch(addToDefault(cityName));
    dispatch(getDefaultWeather(defaultCitiesNames));
    setModalVisible(!modalVisible);
    toast('Successfully added to the Home Screen');
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Add this location to the home screen?
            </Text>

            <View style={styles.confirmBtns}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={checkAndAdd}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 25,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
  },
  button: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    width: '50%',
    margin: 5,
  },
  buttonClose: {
    backgroundColor: '#00B0FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  confirmBtns: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
