import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface InputProps{
  
}

const TaskList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  const handleAddTask=()=>{
    return (
      <View style={style.TaskList}>
        {newTaskTitle}
      </View>
    )
  }
  console.log(newTaskTitle);

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.addBtn}
        onPress={() => {
          setIsModalVisible(true);
        }}>
        <Text style={style.addBtnText}>Add</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <KeyboardAvoidingView style={style.modalContainer}>
          <View style={style.modalContent}>
            <View style={style.modalHeader}>
              <Text style={style.modalHeaderText}>Add New Task</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
              }}  style={style.closeBtn}>
              <Text style={style.closeBtnText}>Close</Text>
            </TouchableOpacity>
            
            <View style={style.inputContainer}>

            <TextInput style={style.input} onChange={(e)=>{setNewTaskTitle(e.nativeEvent.text)}} value={newTaskTitle} placeholder="Enter Task Title" >

            </TextInput>

            <TouchableOpacity
                style={style.inputAddBtn}
                onPress={()=>{
                }}>
                 
              <Text style={style.AddBtnText}>Add</Text>
            </TouchableOpacity>
            </View>

            <FlatList data={newTaskTitle} renderItem={handleAddTask}>

            </FlatList>


          </View>



       
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addBtn: {
    backgroundColor: '#6200ee',
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  addBtnText: {
    fontSize: 18,
    color: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '85%',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  modalHeader: {
    
  },
  modalHeaderText: {
     fontSize: 30,
     fontWeight: 'bold',
  },
  closeBtn: {
      position: 'absolute',
      right: 20,
      top: 20,
      borderRadius:10,  
      backgroundColor: '#6200ee',
  },
  closeBtnText: {
    fontSize: 14,
    color: '#ffffff',
    padding: 13,
    
},
inputContainer:{
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
  
},
input:{
   marginVertical:10,
   marginHorizontal:12,
   padding:21,
   borderRadius:10,
   borderWidth:1,
   borderColor:'#6200ee',
   width:'70%',

},
inputAddBtn:{
  backgroundColor:'orange',
  borderRadius:10,
  marginLeft:12,
  
},
AddBtnText:{
 fontSize:10,
 color:'#ffffff',
 padding:13,
 fontWeight:'bold',
},
TaskList:{
  padding:10,
  fontSize:20,
  fontWeight:'bold',
  color:'#6200ee',
}
});

export default TaskList;
