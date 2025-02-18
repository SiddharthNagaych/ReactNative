import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
