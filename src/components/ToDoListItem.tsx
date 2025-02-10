import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from './types/types';
interface TodoListItemProps {
  todo: Todo;
  onDelete: () => void;
  
}



const ToDoListItem: React.FC<TodoListItemProps> = ({todo,onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{todo.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Edit}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
      <Text style={styles.Delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF4029',
  },
  Edit: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Delete: {
    backgroundColor: 'pink',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToDoListItem;
