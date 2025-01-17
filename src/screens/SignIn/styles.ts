import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #E6F7FF;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 120px;
  margin-bottom: 16px;
`;

export const AppName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  width: 80%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  margin-bottom: 8px;
  font-size: 14px;
  text-align: center;
`;
