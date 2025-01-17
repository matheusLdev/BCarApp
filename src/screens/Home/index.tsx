import React from 'react';
import {  View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Logo, AppName, WelcomeText, Header, LogoutButton, LogoutButtonText } from './styles';
import CarImage from '@/assets/images/car.png';
import BrandsList from '@/src/components/BrandsList'; 

export default function Home({ navigation }: any) {
  const { user, signOut } = useAuth();
  
  return (
    <Container>
      <Header>
        <View style={{ alignItems: 'center' }}>
          <Logo source={CarImage} />
          <AppName>BCar</AppName>
        </View>
        <WelcomeText>Welcome, {user}!</WelcomeText>
      </Header>
      
      <BrandsList navigation={navigation} />
      
      <LogoutButton onPress={signOut}>
        <LogoutButtonText>Logout</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}
