import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import weatherReducer from './weather';
import themeReducer from './theme';
import featureFlagsReducer from './featureFlags';

const themePersistConfig = {
  key: 'theme',
  storage: AsyncStorage,
};

const weatherPersistConfig = {
  key: 'weather',
  storage: AsyncStorage,
  blacklist: ['currentCityInfo', 'defaultCitiesData', 'error', 'loading'],
};

const reducer = combineReducers({
  weather: persistReducer(weatherPersistConfig, weatherReducer),
  theme: persistReducer(themePersistConfig, themeReducer),
  featureFlags: featureFlagsReducer,
});

//const persistedReducer = persistReducer(rootPersistConfig, reducer);

export const store = createStore(reducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
