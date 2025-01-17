import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Container, Header, BackButton, Title, ModelsList, ModelItem, ModelText } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { Model } from '@/src/types';
import { useAlert } from '@/src/hooks/useAlert';
import { RootStackParamList } from '@/src/routes/types';

type ModelsRouteProp = RouteProp<RootStackParamList, 'Models'>;

export default function Models({ route }: { route: ModelsRouteProp }) {
  const { brandId, brandName } = route.params;
  const [models, setModels] = useState<Model[]>([]);
  const { goBack } = useNavigation();
  const { showAlert } = useAlert();

  const loadData = async () => {
    try {
      const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`);
      setModels(response.data.modelos);
    } catch (error: any) {
      showAlert(error.message, 'error');
    }
  };

  useEffect(() => {
    loadData();
  }, [brandId]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()}>
          <Icon name="chevron-left" size={28} color="#ffffff" />
        </BackButton>
        <Title>Models {brandName}</Title>
      </Header>
      <ModelsList
        data={models}
        keyExtractor={(item: Model) => item.codigo.toString()}
        renderItem={({ item }: { item: Model }) => (
          <ModelItem>
            <ModelText>{item.nome}</ModelText>
          </ModelItem>
        )}
      />
    </Container>
  );
}
