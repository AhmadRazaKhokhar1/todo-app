import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  //adding the todo
  const addTodo = () => {
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };
  //deleting the todo
  const deleteTodo = (e, index) => {
    console.log("bhjgvccx");
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <View style={styles.form}>
        <TextInput
          value={todo}
          onChangeText={(value) => setTodo(value)}
          style={styles.field}
          keyboardType="default"
        />
        <View style={styles.button}>
          <TouchableOpacity onPress={addTodo}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.todos}>
        {todos.map((todo, index) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "dodgerblue",
                padding: 10,
                borderRadius: 13,
                minWidth: "50vw",
                alignItems:'center',
                maxWidth:'auto'
              }}
            >
              <Text style={{color:'white',padding:5}}>{todo}</Text>
              <TouchableOpacity
                style={{ backgroundColor: "red", padding: 5 }}
                onPress={(e) => deleteTodo(e, index)}
              >
                <Text style={{ color: "white", borderRadius:12}}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todos: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBlockColor: "gray",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heading: {
    fontWeight: "900",
    fontSize: 25,
  },
  form: {
    flex: 1 / 4,
    margin: 1,
    display: "flex",
    justifyContent: "space-between",
    padding: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  field: {
    backgroundColor: "lightgray",
    borderRadius: 12,
    padding: 8,
    width: 250,
    margin: "5",
  },
  button: {
    backgroundColor: "dodgerblue",
    fontSize: 12,
    color: "white",
    borderRadius: 15,
    padding: 12,
    width: 50,
    margin: 2,
  },
});
