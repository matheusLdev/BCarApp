import styled from 'styled-components/native';

export const ListBrands = styled.FlatList`
  margin-top: 20px;
`;

export const BrandItem = styled.View`
  background-color: #ffffff;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(148, 202, 228);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const BrandText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

