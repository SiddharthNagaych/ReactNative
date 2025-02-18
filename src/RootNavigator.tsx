import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./Screens/HomeScreen";
import StackNavigationDemo from "./components/Stack/StackNavigationDemo";
import TabNavigationDemo from "./components/tab/TabNavigationDemo";
import DrawerNavigationDemo from "./components/Drawer/DrawerNavigation";
import PullToRefresh from "./components/infiniteview/InfiniteView";
import ScreenRootNavigator from "./screen/ScreenNavigator";

export type RootStackParamList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
  PullToRefresh: undefined;
  TabScreen: undefined;
};

const Stack=createStackNavigator<RootStackParamList>();
const RootNavigator:React.FC =()=>{
    return (
        <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
         <Stack.Screen name="TabDemo" component={TabNavigationDemo}/>
         <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo}/>
         <Stack.Screen name="PullToRefresh" component={PullToRefresh}/>
         <Stack.Screen name="TabScreen" component={ScreenRootNavigator}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;