import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #E6F7FF;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 4px;
  border-radius: 8px;
  margin-right: 16px;
  border: 1px solid rgb(148, 202, 228);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ModelsList = styled.FlatList`
  margin-top: 16px;
`;

export const ModelItem = styled.View`
  background-color: #ffffff;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid rgb(148, 202, 228);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModelText = styled.Text`
  font-size: 16px;
  color: #333;
`;
