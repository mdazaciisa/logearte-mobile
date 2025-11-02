import { createContext, useContext, useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const EXPECTED_USERS = [
    { id: '1', name: 'user', email: 'user@correo.cl',password: '1234' },
    { id: '2', name: 'admin', email: 'admin@correo.cl', password: '1234' },
]

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        const foundUser = EXPECTED_USERS.find(u => u.email === email && u.password === password);

        if (foundUser) {
            setUser({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
        } else {
            throw new Error('Email o contraseña incorrecta');
            //Alert.alert('Login failed:', 'Invalid username or password');
        }
    };

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
