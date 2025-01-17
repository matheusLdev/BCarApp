import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Input = styled.TextInput`
  width: 80%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px 24px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default function SignIn() {
  const { control, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const { navigate } = useNavigation();

  const onSubmit = async (data: { user: string; password: string }) => {
    try {
      await signIn(data.user, data.password);
      navigate('Home');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Controller
        control={control}
        name="user"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Username"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>Sign In</ButtonText>
      </Button>
    </Container>
  );
}
