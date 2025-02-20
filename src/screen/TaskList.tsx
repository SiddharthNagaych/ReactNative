import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TaskList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [newTaskTitle, setNewTaskTitle] = React.useState('');

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
            <TextInput>
                
            </TextInput>
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
    
}

});

export default TaskList;
