import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function Models({ route }: any) {
  const { brandId } = route.params;
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`)
      .then((response) => setModels(response.data.modelos))
      .catch((error) => console.error(error));
  }, [brandId]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={models}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
    </View>
  );
}
