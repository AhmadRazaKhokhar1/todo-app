import { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable,
} from "react-native";
import { ThemeContext } from "../Contexts/ThemeContext";
export default function Home() {
    const {currentMode } = useContext(ThemeContext);
    // style sheet
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
          backgroundColor:`${currentMode==='false'?'dodgerblue':'black'}`,
          fontSize: 12,
          color: "white",
          borderRadius: 15,
          padding: 12,
          width: 50,
          margin: 2,
        },
      });
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
          inputMode="text"
        />
        <View style={styles.button}>
          <Pressable onPress={addTodo}>
            <Text style={{color:'white'}}>Add</Text>
          </Pressable>
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
                backgroundColor: `${currentMode==='false'?'dodgerblue':'black'}`,
                padding: 10,
                borderRadius: 13,
                minWidth: "50vw",
                alignItems: "center",
                maxWidth: "auto",
              }}
            >
              <Text style={{ color: "white", padding: 5 }}>{todo}</Text>
              <Pressable
                style={{ backgroundColor: "red", padding: 5 }}
                onPress={(e) => deleteTodo(e, index)}
              >
                <Text style={{ color: "white", borderRadius: 12 }}>Delete</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

