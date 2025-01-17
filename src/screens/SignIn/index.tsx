import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Button, ButtonText, ErrorMessage, Logo, AppName } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/src/routes/types';
import Car from '@/assets/images/car.png'
import { useAlert } from '@/src/hooks/useAlert';

type SignInFormData = {
  user: string;
  password: string;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignIn() {
  const { control, handleSubmit } = useForm<SignInFormData>();
  const { signIn } = useAuth();
  const { navigate } = useNavigation<NavigationProps>();
  const { showAlert } = useAlert()

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      await signIn(data.user, data.password);
      navigate('Home');
    } catch (error: any) {
      showAlert(error.message, 'error');
    }
  };

  return (
    <Container>
      <Logo source={Car} />
      <AppName>BCar</AppName>
      <Controller
        control={control}
        name="user"
        rules={{ required: 'Username is required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              placeholder="Username"
              value={value}
              onChangeText={onChange}
            />
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              placeholder="Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </>
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>
        <ButtonText>Sign In</ButtonText>
      </Button>
    </Container>
  );
}
