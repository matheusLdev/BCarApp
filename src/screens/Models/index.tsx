import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, BackButton, Title, ModelsList, ModelItem, ModelText } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';

export default function Models({ route }: any) {
  const { brandId } = route.params;
  const [models, setModels] = useState([]);
  const { goBack } = useNavigation();

  useEffect(() => {
    axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`)
      .then((response) => setModels(response.data.modelos))
      .catch((error) => console.error(error));
  }, [brandId]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()}>
          <Icon name="chevron-left" size={28} color="#ffffff" />
        </BackButton>
        <Title>Modelos da {route.params.brandName}</Title>
      </Header>
      <ModelsList
        data={models}
        keyExtractor={(item) => item.codigo.toString()}
        renderItem={({ item }) => (
          <ModelItem>
            <ModelText>{item.nome}</ModelText>
          </ModelItem>
        )}
      />
    </Container>
  );
}
