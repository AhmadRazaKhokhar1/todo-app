import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { ThemeContext } from "../Contexts/ThemeContext";
import { addDoc, collection } from "@react-native-firebase/firestore";
import { db } from "../../firebase.config";
export default function Home() {
  const { currentMode } = useContext(ThemeContext);
  // style sheet
  const styles = StyleSheet.create({
    todos: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBlockColor: "gray",
      height: "auto",
      width: "auto",
      marginTop: 55,
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
      marginTop: 32,
      display: "flex",
      justifyContent: "space-between",
      padding: 3,
      alignItems: "center",
      flexDirection: "row",
      position: "absolute",
      zIndex: 99,
    },
    field: {
      backgroundColor: "lightgray",
      borderRadius: 12,
      padding: 8,
      width: 250,
      margin: "5",
    },
    button: {
      backgroundColor: `${currentMode === "false" ? "dodgerblue" : "black"}`,
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
  const addTodo =async () => {
    if (!todo && todo === "") {
      return alert("The field should not be empty! please try again");
    }
    setTodos((prev) => [...prev, todo]);
    const collectionRef = collection(db, 'todos');
    await addDoc(collectionRef, todo)
    setTodo("");
  };
  //deleting the todo
  const deleteTodo = (e, index) => {
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
            <Text style={{ color: "white" }}>Add</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.todos}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {todos.map((todo, index) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: `${
                  currentMode === "false" ? "dodgerblue" : "black"
                }`,
                padding: 10,
                borderRadius: 13,
                alignItems: "center",
                maxWidth: "80%",
                minWidth: "80%",
                height: "auto",
                marginTop: 12,
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
      </ScrollView>
    </View>
  );
}
