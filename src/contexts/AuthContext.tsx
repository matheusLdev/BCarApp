import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthContextData {
  user: string | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const signIn = async (username: string, password: string) => {
    try {
      const response = await axios.post('https://test-api-y04b.onrender.com/signIn', {
        user: username,
        password,
      });
      const { user } = response.data;
      setUser(user);
      await AsyncStorage.setItem('@BCarApp:user', user);
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const signOut = async () => {
    setUser(null);
    await AsyncStorage.removeItem('@BCarApp:user');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
