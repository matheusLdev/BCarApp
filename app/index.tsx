import React from 'react';
import { AuthProvider } from '../src/contexts/AuthContext';
import Routes from '../src/routes';
import { AlertProvider } from '@/src/hooks/useAlert';

export default function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AlertProvider>
  );
}
