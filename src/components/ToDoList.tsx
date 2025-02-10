import React from 'react';

import {ScrollView, StyleSheet} from 'react-native';
import {Todo} from './types/types';
import ToDoListItem from './ToDoListItem';

interface TodoListProps {
  todosList: Todo[];
  onDeleteTodo: (id: string) => void;
  
 
}

const ToDoList: React.FC<TodoListProps> = ({todosList,onDeleteTodo}) => {
  return (
    <ScrollView style={styles.container}>
      {todosList.map(todo => (
        <ToDoListItem key={todo.id} todo={todo} onDelete={()=>onDeleteTodo(todo.id)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ToDoList;
