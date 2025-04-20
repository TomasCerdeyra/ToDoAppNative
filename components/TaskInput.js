import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ onAdd, onEdit, editingTask }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.title);
    } else {
      setText('');
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (text.trim()) {
      if (editingTask) {
        onEdit(text.trim());
      } else {
        onAdd(text.trim());
      }
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nueva tarea"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title={editingTask ? "Guardar" : "Agregar"} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black',
    padding: 10,
    marginRight: 8,
    borderRadius: 6,
  },
});
