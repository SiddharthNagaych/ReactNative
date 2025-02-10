import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useState } from 'react';

interface TodoInputProps{
   onAddTodo:(text:string)=>void
}

const TextInputComponent: React.FC<TodoInputProps> = ({onAddTodo}) => {
  
  const [text, setText]=useState('');
  const handleAddToDo=()=>{
    if(text.trim&&text.trim().length>0){
        onAddTodo(text.trim());
        setText('');
    }
}


  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add A New Todo"
      />
      <TouchableOpacity style={styles.toDoAddButton} onPress={handleAddToDo} >
        <Text style={styles.toDoAddButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  toDoAddButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toDoAddButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
