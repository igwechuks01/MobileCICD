import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {store} from './src/redux/store';
import {RootNavigator} from './src/navigation/RootNavigator';
import {Provider} from 'react-redux';
import {API_BASE_URI} from './src/utils/env';

export default function App() {
  console.log('BASE URI: ', API_BASE_URI);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
