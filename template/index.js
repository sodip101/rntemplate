/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';

import App from './App';
import { name as appName } from './app.json';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function Root() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootSiblingParent>
            <App />
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => Root);
