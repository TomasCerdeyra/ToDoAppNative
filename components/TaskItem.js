import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <View style={styles.task}>
            <TouchableOpacity style={styles.contentText} onPress={() => onToggle(task.id)}>
                <Text style={[styles.text, task.completed && styles.completed]}>
                    {task.title}
                </Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={[task.completed && styles.completed]}>
                    {task.completed ? '✅ ' : '⬜ '}
                </Text>
                <TouchableOpacity onPress={() => onDelete(task.id)}>
                    <Text style={styles.delete}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 8,
        marginVertical: 4,
    },
    contentText:{
        width: '80%',
    },
    text: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    delete: {
        fontSize: 18,
    },
    content: {
        display:'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        gap: '5'
    }
});
