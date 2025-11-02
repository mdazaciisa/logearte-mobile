import { useAuth } from "@/components/context/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    const { login } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (text: string) => {
        setEmail(text);
    }

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    }

    const validatePassword = () => {
        if (password !== '1234') {
            setErrorMessage('Contraseña incorrecta');
            return;
        }
        setErrorMessage('');
        router.push('/(tabs)');
    }

    const handleLogin = () => {
        if (password !== '1234') {
            Alert.alert('Error:', 'Contraseña incorrecta');
            return;
        }
        
        try {
            login(email, password);
            router.replace('/(tabs)');
        } catch (error) {
            const errorMessage = (error as Error)?.message || 'Credenciales incorrectas';
            Alert.alert('Error:', errorMessage);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesión</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input}
                    placeholder="Email"
                    onChangeText={handleEmailChange} />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={handlePasswordChange}
                />
            </View>
            <Pressable style={styles.button} onPress={handleLogin} >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#FF6F61',
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
        elevation: 5
    },
    buttonText: {
        color: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#7E57C2',
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 20,
        color: 'white',
        fontSize: 18
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: 'white',
    }
});