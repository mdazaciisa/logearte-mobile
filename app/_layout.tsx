import AuthProvider from '@/components/context/auth-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

/* export const unstable_settings = {
  //anchor: '(tabs)',
  anchor: 'login',
}; */

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack initialRouteName='login'>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
