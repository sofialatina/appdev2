// (FULL EXACT CODE — already clean and ready)
import { useState } from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";

const TodoScreen = () => {
    const [task, setTask] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const todoList = useQuery(api.todos.get);
    const addTodo = useMutation(api.todos.add);
    const toggleTodoMutation = useMutation(api.todos.toggle);
    const deleteTodoMutation = useMutation(api.todos.remove);

    if (todoList === undefined) {
        return <Text>Loading tasks...</Text>;
    }

    const filterTodos = todoList.filter(item =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddTodo = async () => {
        if (task.trim().length === 0) return;
        await addTodo({ text: task });
        setTask('');
    };

    const toggleTodo = (id: Id<"todos">, currentStatus: boolean) => {
        toggleTodoMutation({ id, isCompleted: !currentStatus });
    };

    const confirmDelete = (id: Id<"todos">) => {
        Alert.alert("Delete Task", "Are you sure?", [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", onPress: () => deleteTodoMutation({ id }) }
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Tasks</Text>

                <TextInput
                    placeholder="Search todos..."
                    style={styles.searchBar}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <View style={styles.body}>
                <ScrollView>
                    {filterTodos.map(item => (
                        <View style={styles.todoItem} key={item._id}>
                            <TouchableOpacity onPress={() => toggleTodo(item._id, item.isCompleted)}>
                                <Text style={item.isCompleted && styles.completed}>
                                    {item.text}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => confirmDelete(item._id)}>
                                <Text>🗑</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.inputRow}>
                    <TextInput
                        placeholder="New task"
                        value={task}
                        onChangeText={setTask}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={handleAddTodo}>
                        <Text>➕</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#7aa0ff" },
    header: { padding: 40 },
    title: { fontSize: 28, color: "#fff" },
    searchBar: { backgroundColor: "#fff", marginTop: 10, padding: 10 },
    body: { flex: 1, backgroundColor: "#fff", padding: 20 },
    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    completed: { textDecorationLine: "line-through" },
    inputRow: { flexDirection: "row", marginTop: 10 },
    input: { flex: 1, borderWidth: 1, padding: 10 }
});