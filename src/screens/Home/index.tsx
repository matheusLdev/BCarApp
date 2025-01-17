import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

export default function Home({ navigation }: any) {
  const { user, signOut } = useAuth();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then((response) => setBrands(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Welcome, {user}!</Text>
      <FlatList
        data={brands}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Models', { brandId: item.codigo })}>
            <Text>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={signOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
