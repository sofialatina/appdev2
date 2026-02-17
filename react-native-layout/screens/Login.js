import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ switchScreen }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === "test@gmail.com" && password === "1234") {
            Alert.alert("Success", "Logged in successfully!");
        } else {
            Alert.alert("Error", "Invalid credentials");
        }
    };

   return (
    <View style={styles.container}>

        <Image
            source={require('../assets/images/login.png')}
            style={styles.image}
            resizeMode="contain"
        />

        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#555" />
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
        </View>

        <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#555" />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text
            style={{ marginTop: 15, textAlign: 'center', color: 'blue' }}
            onPress={switchScreen}
        >
            Don't have an account? Sign up
        </Text>

    </View>
);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        height: 50,
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#007BFF',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
