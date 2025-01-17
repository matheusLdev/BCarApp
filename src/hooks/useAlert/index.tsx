import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AlertModal, CloseButton, CloseButtonText, Message } from './styles';

type AlertContextData = {
  showAlert: (message: string, type: 'error' | 'success') => void;
  hideAlert: () => void;
};

type AlertProviderProps = {
  children: ReactNode;
}

const AlertContext = createContext<AlertContextData | undefined>(undefined);

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'error' | 'success'>('success');

  const showAlert = (msg: string, alertType: 'error' | 'success') => {
    setMessage(msg);
    setType(alertType);
    setVisible(true);
  };

  const hideAlert = () => setVisible(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {visible && (
        <AlertModal style={{ backgroundColor: type === 'error' ? '#f44336' : '#4caf50' }}>
          <Message>{message}</Message>
          <CloseButton onPress={hideAlert}>
            <CloseButtonText>X</CloseButtonText>
          </CloseButton>
        </AlertModal>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
