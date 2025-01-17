import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #E6F7FF;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
`;

export const AppName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  margin-left: 24px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #007bff;
  max-width: fit-content;
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
`;

export const LogoutButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;
