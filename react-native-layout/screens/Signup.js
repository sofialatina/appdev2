import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup({ switchScreen }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        Alert.alert("Success", "Account created successfully!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>

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

            <Text
                style={{ marginTop: 15, textAlign: 'center', color: 'blue' }}
                onPress={switchScreen}
            >
                Already have an account? Login
            </Text>


            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
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
        backgroundColor: '#28A745',
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
