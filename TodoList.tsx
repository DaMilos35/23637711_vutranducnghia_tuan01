import React, { useState } from 'react';
import { View, Text } from 'react-native';

interface Todo {
  id: string;
  title: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', title: 'Học bài A' },
    { id: '2', title: 'Ôn tập bài B' },
    { id: '3', title: 'Làm bài tập bài C' }
  ]);

  return (
    <View>
      {todos.map((task) => {
        return (
          <View key={task.id}>
            <Text>Mã số: {task.id}</Text>
            <Text>Tên công việc: {task.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default TodoList;