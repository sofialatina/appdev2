import React, { useState } from "react";
import {
View,
Text,
TextInput,
TouchableOpacity,
FlatList,
StyleSheet
} from "react-native";

export default function Todo() {

const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
const [search, setSearch] = useState("");

const addTodo = () => {
if (todo.trim() === "") return;

const newTodo = {
id: Date.now().toString(),
text: todo,
completed: false
};

setTodos([...todos, newTodo]);
setTodo("");
};

const toggleTodo = (id) => {
setTodos(
todos.map((item) =>
item.id === id ? { ...item, completed: !item.completed } : item
)
);
};

const deleteTodo = (id) => {
setTodos(todos.filter((item) => item.id !== id));
};

const filteredTodos = todos.filter((item) =>
item.text.toLowerCase().includes(search.toLowerCase())
);

return (
<View style={styles.container}>

<Text style={styles.title}>Todo List</Text>

<TextInput
style={styles.input}
placeholder="Search..."
value={search}
onChangeText={setSearch}
/>

<View style={styles.addContainer}>
<TextInput
style={styles.inputTodo}
placeholder="Enter a task"
value={todo}
onChangeText={setTodo}
/>

<TouchableOpacity style={styles.addButton} onPress={addTodo}>
<Text style={styles.addButtonText}>Add</Text>
</TouchableOpacity>
</View>

<FlatList
data={filteredTodos}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.todoItem}>

<TouchableOpacity
style={{ flex: 1 }}
onPress={() => toggleTodo(item.id)}
>
<Text
style={[
styles.todoText,
item.completed && styles.completed
]}
>
{item.text}
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => deleteTodo(item.id)}>
<Text style={styles.delete}>Delete</Text>
</TouchableOpacity>

</View>
)}
/>

</View>
);
}

const styles = StyleSheet.create({

container: {
flex: 1,
padding: 20,
backgroundColor: "#fff"
},

title: {
fontSize: 28,
fontWeight: "bold",
marginBottom: 20,
textAlign: "center"
},

input: {
borderWidth: 1,
borderColor: "#ccc",
padding: 10,
marginBottom: 15,
borderRadius: 5
},

addContainer: {
flexDirection: "row",
marginBottom: 20
},

inputTodo: {
flex: 1,
borderWidth: 1,
borderColor: "#ccc",
padding: 10,
borderRadius: 5
},

addButton: {
backgroundColor: "#007bff",
padding: 10,
marginLeft: 10,
borderRadius: 5
},

addButtonText: {
color: "#fff",
fontWeight: "bold"
},

todoItem: {
flexDirection: "row",
alignItems: "center",
padding: 12,
borderBottomWidth: 1,
borderBottomColor: "#eee"
},

todoText: {
fontSize: 16
},

completed: {
textDecorationLine: "line-through",
color: "gray"
},

delete: {
color: "red",
marginLeft: 10
}

});