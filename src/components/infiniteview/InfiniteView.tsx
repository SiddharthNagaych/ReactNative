
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const sampleData=Array.from({length:100},(_,index)=>({
    id:index.toString(),
    title:`Item ${index+1}`
}));

const PullToRefresh: React.FC = () => {
    const [refreshing,setRefreshing]=useState(false);
    const [data,setData]=useState(sampleData);
    const [loading,setLoading]=useState(false);
    const renderItem=({item}:{item:{id:string,title:string}})=>{
        return(
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
        )
    }
    return (
     

        <View style={styles.container}>
            <Text style={styles.header}>
                Pull To Refresh and get large list  with infiniteview
            </Text>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            />
        </View>
     
    )
}

const styles=StyleSheet.create({
    container:{
       
    
    },
    header:{
        fontSize:25,
        fontWeight:'bold'
    },
    item:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    itemText:{
        fontSize:20
    }
})

export default PullToRefresh;