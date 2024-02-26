import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [todo, setTodo] = useState('');
  const addTodo = () => {
  
    console.log(todo);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <View>
        <TextInput
          onChangeText={(value) => setTodo(value)}
          value={todo}
          style={styles.field}
        
        />
        <View style={styles.button}>
          <Button title="Add" onPress={addTodo} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontWeight: "900",
    fontSize: 25,
  },
  field: {
    backgroundColor: "lightgray",
    borderRadius: 12,
    padding: 8,
    width: 250,
    margin: "5, 0",
  },
  button: {
    backgroundColor: "#fff",
    fontStyle: "italic",
    fontSize: 12,
    color: "red",
  },
});
