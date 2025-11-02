import { useAuth } from '@/components/context/auth-context';
import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('./login');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a LogeArte</Text>
      <Text style={styles.paragraph}>Presiona el botón para abrir el modal, o haz click en Perfil para ir a la pantalla de perfil</Text>

      <Link href="/modal" style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Link>

      <Pressable style={[styles.button, { backgroundColor: '#DC3545' } ]} onPress={handleLogout}>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    //color: 'white',
  },
  paragraph: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
    color: 'black',
    fontSize: 18,
    padding: 30,
    textAlign: 'justify',
  },
});
