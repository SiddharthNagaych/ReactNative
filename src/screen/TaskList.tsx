import React from "react"
import { StyleSheet, Text, View } from "react-native"





const TaskList:React.FC=()=>{
    return (
        <View style={style.container}>
            <Text>
                TaskList
            </Text>
            
        </View>
    )
}

const style=StyleSheet.create(
{
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
}
)

export default TaskList;