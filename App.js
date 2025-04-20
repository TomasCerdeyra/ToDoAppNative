import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import { saveTasks, loadTasks } from './utils/storage';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Nuevo estado

  useEffect(() => {
    (async () => {
      const stored = await loadTasks();
      setTasks(stored);
    })();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const saveEdit = (newTitle) => {
    setTasks(tasks.map(t =>
      t.id === editingTask.id ? { ...t, title: newTitle } : t
    ));
    setEditingTask(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Tareas</Text>
      <TaskInput
        onAdd={addTask}
        onEdit={saveEdit}
        editingTask={editingTask}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={startEditing} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
