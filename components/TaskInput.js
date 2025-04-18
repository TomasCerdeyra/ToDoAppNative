
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nueva tarea"
        placeholderTextColor="#888" 
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Agregar" onPress={handleAdd} />
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
    color: 'black',           
    backgroundColor: 'white',  
    padding: 10,
    marginRight: 8,
    borderRadius: 6,
  },  
});
