import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from 'react-native';

interface Todo {
  id: string;
  text: string;
}

export default function App() {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');

  const addTodo = () => {
    if (inputText.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputText,
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };


  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: string, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const saveEdit = (id: string) => {
    if (editText.trim() === '') return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Application</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write down..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="add" onPress={addTodo}/>
      </View>

      <ScrollView style={styles.listContainer}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            {editingId === todo.id ? (
              <View style={styles.editRow}>
                <TextInput
                  style={styles.editInput}
                  value={editText}
                  onChangeText={setEditText}
                />
                <View style={styles.buttonGroup}>
                  <Button title="save" onPress={() => saveEdit(todo.id)}/>
                  <Button title="X" color="gray" onPress={cancelEdit}/>
                </View>
              </View>
            ) : (
              <>
                <Text style={styles.todoText}>{todo.text}</Text>
                <View style={styles.buttonGroup}>
                  <Button title="change" color="#f39c12" onPress={() => startEditing(todo.id, todo.text)}/>
                  <Button title="delete" color="red" onPress={() => deleteTodo(todo.id)}/>
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#fff'
  },
  listContainer: {
    flex: 1
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  todoText: {
    fontSize: 16,
    flex: 1,
    marginRight: 10
  },
  editRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  editInput: {
    flex: 1,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    backgroundColor: '#fff'
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 5
  }
});