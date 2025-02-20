import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {RootStackParamList} from '../RootNavigator';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <View>
      <Text style={styles.container}>Home Screen</Text>;
      <Button
        title="Go to Stack Navigation Demo"
        onPress={() => navigation.navigate('StackDemo')}
      />
      <Button
        title="Go to Tab Navigation Demo"
        onPress={() => navigation.navigate('TabDemo')}
      />
      <Button
        title="Go to Drawer Navigation Demo"
        onPress={() => navigation.navigate('DrawerDemo')}
      />
      <Button
        title="Go to Modal Navigation Demo"
        onPress={() => navigation.navigate('PullToRefresh')}
      />
      <Button
        title="Go to tabScreen"
        onPress={() => navigation.navigate('TabScreen')}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
