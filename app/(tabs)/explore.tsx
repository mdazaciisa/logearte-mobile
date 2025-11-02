import { useAuth } from '@/components/context/auth-context';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de usuario</Text>

      <Text style={styles.paragraph}>ID: {user?.id}</Text>
      <Text style={styles.paragraph}>Nombre: {user?.name}</Text>
      <Text style={styles.paragraph}>Email: {user?.email}</Text>

      <Pressable style={[styles.button, { backgroundColor: '#DC3545' }]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B39DDB',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  paragraph: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    //color: 'white',
  },
});
