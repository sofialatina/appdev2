import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function TodoScreen() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: "1", text: "Learn react native flexbox", done: true },
    { id: "2", text: "Create todo app", done: false }
  ]);
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now().toString(),
      text: task,
      done: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    const updated = tasks.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((item) => item.id !== id);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#999" />
          <TextInput
            placeholder="Search todos..."
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Todo List Container */}
      <View style={styles.todoContainer}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>

              <TouchableOpacity onPress={() => toggleTask(item.id)}>
                <Ionicons
                  name={item.done ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={item.done ? "#7D7AFF" : "#bbb"}
                />
              </TouchableOpacity>

              <Text
                style={item.done ? styles.doneText : styles.todoText}
              >
                {item.text}
              </Text>

              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Ionicons name="trash-outline" size={22} color="red" />
              </TouchableOpacity>

            </View>
          )}
        />
      </View>

      {/* Add Task */}
      <View style={styles.addSection}>

        <TextInput
          placeholder="Add a new task"
          style={styles.addInput}
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Ionicons name="add" size={26} color="#000" />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#7D7AFF",
  },

  header: {
    paddingTop: 70,
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  searchBox: {
    backgroundColor: "#EAEAEA",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 45,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  todoContainer: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    marginTop: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 25,
  },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },

  todoText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },

  doneText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#999",
  },

  addSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F3F3F3",
  },

  addInput: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 45,
  },

  addButton: {
    backgroundColor: "#FFC107",
    width: 55,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 10,
  },

});