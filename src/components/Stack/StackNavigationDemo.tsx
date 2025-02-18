import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

export type StackParamsList = {
    
    Screen1: undefined;
    Screen2: {
        itemId: number;
    };
};
const Stack = createStackNavigator<StackParamsList>();


const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen
        options={({route}) => ({title: `Item-${route.params?.itemId ?? 'Unknown'}`})}
        name="Screen2"
        component={Screen2}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
