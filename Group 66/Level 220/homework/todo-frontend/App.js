import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const API_URL = 'http://10.100.165.219:5000/api/tasks';


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  // get all
  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json()
        setTasks(data);
        setErrorMessage('');
    } catch (error) {
        setErrorMessage('Data cannot be found!');
      }
    };

    // post
    const addTask = async () => {
    if (!text.trim()) return;
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
      setText('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Task cannot be added!');
    }
  };

  // put
  const toggleComplete = async (id, currentStatus) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !currentStatus }),
      });
      const updatedTask = await response.json();
      setTasks(tasks.map(t => (t.id === id ? updatedTask : t)));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Post cannot be updated!');
    }
  };

  // delete
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter(t => t.id !== id));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('TAsk cannot be deleted');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>

      {errorMessage ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Take down a task..."
          value={text}
          onChangeText={setText}
        />
        <View style={styles.buttonWrapper}>
          <Button title="+" onPress={addTask} color="#28a745" />
        </View>
      </View>

      <ScrollView style={styles.listContainer}>
        {tasks.map((item) => (
          <View key={item.id} style={styles.taskCard}>
            <Text
              style={[styles.taskText, item.completed && styles.completedText]}
            >
              {item.text}
            </Text>

            <View style={styles.actions}>
              <Button
                title={item.completed ? '✓' : 'O'}
                onPress={() => toggleComplete(item.id, item.completed)}
                color="#007bff"
              />
              <View style={{ width: 5 }} />
              <Button
                title="X"
                onPress={() => deleteTask(item.id)}
                color="#dc3545"
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f9'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  buttonWrapper: {
    width: '100%'
  },
  listContainer: {
    flex: 1
  },
  taskCard: {
    flexDirection: 'column', 
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12
  },
  taskText: {
    fontSize: 16,
    marginBottom: 12
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888'
  },
  actions: {
    flexDirection: 'column',
    width: '100%'
  },
  errorBox: {
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15
  },
  errorText: {
    color: '#721c24',
    textAlign: 'center',
  }
});