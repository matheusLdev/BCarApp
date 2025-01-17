import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListBrands, BrandItem, BrandText } from './styles';
import axios from 'axios';

export default function BrandsList({ navigation }: any) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then((response) => setBrands(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ListBrands
      data={brands}
      keyExtractor={(item) => item.codigo.toString()}
      renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Models', { brandId: item.codigo, brandName: item.nome })}>
            <BrandItem>
              <BrandText>{item.nome}</BrandText>
            </BrandItem>
          </TouchableOpacity>
      )}
    />
  );
}
