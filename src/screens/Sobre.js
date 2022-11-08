import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import Capa from '../assets/foto-capa.jpg';
import Card from '../Components/Card';
import {DadosSobre} from '../Dados/Sobre';

export default function Sobre() {
  const renderItem = ({item}) => <Card item={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.containerDescricao}>
        <Text style={styles.textoNome}>Ayrton Senna</Text>
        <Image style={styles.imagemPrincipal} source={Capa} />
        <Text style={styles.textoDescricao}>
          No esporte mais global e veliz do mundo, um piloto é considerado o
          mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números
          ajudam a explicar porque o piloto ganhou status de mito do esporte.
          Mas Senna é mais do que isso: o brasileiro foi o responspavel por
          alguns dos momentos mais mágicos da principal categoria do
          automobilismo mundial.
        </Text>
      </View>
      <View style={styles.containerLista}>
        <FlatList
          data={DadosSobre}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDescricao: {
    flex: 3.2,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textoNome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  imagemPrincipal: {
    width: '100%',
    height: '45%',
    borderWidth: 2,
    borderRadius: 8,
  },
  textoDescricao: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerLista: {
    flex: 2,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
