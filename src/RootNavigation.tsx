import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./Screens/HomeScreen";


const Stack=createStackNavigator();
const RootNavigation:React.FC =()=>{
    return (
        <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default RootNavigation;