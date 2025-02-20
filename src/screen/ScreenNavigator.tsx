import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { View } from "react-native"
import Project from "./Project";
import TaskList from "./TaskList";

const Tab=createBottomTabNavigator();

const ScreenRootNavigator:React.FC=()=>{
    return (
       <Tab.Navigator>
           <Tab.Screen name="Project" component={Project}/>
           <Tab.Screen name="TaskList" component={TaskList}/>
       </Tab.Navigator>
    )
}
export default ScreenRootNavigator;