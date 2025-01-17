import styled from 'styled-components/native';

export const AlertModal = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  border-radius: 10px;
  width: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Message = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;
`;

export const CloseButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 10px;
`;
