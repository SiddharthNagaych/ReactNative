import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native"


type DrawerNavigationProps = {
    DrawerScreen1: undefined;
    DrawerScreen2: undefined;
}


const DrawerScreen1:React.FC=()=>{
   return (
      <View>
        DrawerScreen1
      </View>
   )
}

const DrawerScreen2:React.FC=()=>{
   return (
      <View>
        DrawerScreen2
      </View>
   )
}

const DrawerStack=createDrawerNavigator<DrawerNavigationProps>();

const DrawerNavigationDemo:React.FC=()=>{
    return (
    
            <DrawerStack.Navigator>
                <DrawerStack.Screen name="DrawerScreen1" component={DrawerScreen1} />
                <DrawerStack.Screen name="DrawerScreen2" component={DrawerScreen2} />
            </DrawerStack.Navigator>
            
      
    )
} 
export default DrawerNavigationDemo;