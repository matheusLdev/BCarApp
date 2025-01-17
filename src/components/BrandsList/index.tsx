import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListBrands, BrandItem, BrandText } from './styles';
import axios from 'axios';
import { useAlert } from '@/src/hooks/useAlert';
import { Brand } from '@/src/types';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/src/routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Models'>;

export default function BrandsList() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const { showAlert } = useAlert();
  const { navigate } = useNavigation<NavigationProps>();

  const loadData = async () => {
    try {
      const response = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
      setBrands(response.data);
    } catch (error: any) {
      showAlert(error, 'error');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ListBrands
      data={brands}
      keyExtractor={(item: Brand) => item.codigo.toString()}
      renderItem={({ item }: {item: Brand }) => (
          <TouchableOpacity onPress={() => navigate('Models', { brandId: item.codigo, brandName: item.nome })}>
            <BrandItem>
              <BrandText>{item.nome}</BrandText>
            </BrandItem>
          </TouchableOpacity>
      )}
    />
  );
}
