import { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ScrollView,
  Keyboard,
} from "react-native";
import { ThemeContext } from "../Contexts/ThemeContext";
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
  const [isDeleting, setIsDeleting] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  //adding the todo
  const addTodo = async () => {
    if (!todo && todo === "") {
      return alert("The field should not be empty! please try again");
    }
    const collectionRef = db.collection("todos");
    await collectionRef.add({ todo });
    setTodo("");
    Keyboard.dismiss();
    fetchTodos();
    return;
  };
  //get todos
  async function fetchTodos() {
    try {
      setIsLoading(true);
      const collectionRef = db.collection('todos');
      const data = await collectionRef.get();
      console.log(data.docs)
      setTodos(data.docs);
      setIsLoading(false)
      return;
    } catch (error) {
      alert("error while fetching the data!");
      return;
    }
  }
  useEffect(() => {
    fetchTodos();
  }, [])
  //deleting the todo
  const deleteTodo = async (id) => {
    try {
      setIsDeleting(id)
      const collectionRef = db.collection('todos');
      const docRef = collectionRef.doc(id);
      await docRef.delete();
      setIsDeleting(null);
      fetchTodos();
      return;
    } catch (error) {
      alert('There was an internal server \n error while deleting todo!');
      setIsDeleting(false)
      return;
    }
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
        {!isLoading ? todos?.map((todo) => {
          return (
            <View
              key={todo.id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: `${currentMode === "false" ? "dodgerblue" : "black"
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
              <Text style={{ color: "white", padding: 5 }}>{isDeleting === todo.id ? <Text>Deleting.....</Text> : todo.data()?.todo}</Text>
              <Pressable
                style={{ backgroundColor: "red", padding: 5 }}
                onPress={() => deleteTodo(todo?.id)}
              >
                <Text style={{ color: "white", borderRadius: 12 }}>{isDeleting === todo.id ? <Text>Deleting.....</Text> : 'Delete'}</Text>
              </Pressable>
            </View>
          );
        }) :
          <View

          >
            <Text style={{ color: 'black', fontWeight: '800' }}>Loading.................</Text>
          </View>
        }
      </ScrollView>
    </View>
  );
}
