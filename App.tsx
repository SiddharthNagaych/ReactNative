import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/RootNavigation';

function App(): React.JSX.Element {
 

  

  return (
    <NavigationContainer>

    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <RootNavigation/>
       
      </View>

    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
 
});

export default App;
