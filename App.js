import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/Utils/store';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}
