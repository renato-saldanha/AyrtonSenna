import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Card({item}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={item.imagem} />
      <View style={styles.containerTexto}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.texto}>{item.texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 8,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  imagem: {
    width: '25%',
    height: 90,
    resizeMode: 'cover',
  },
  containerTexto: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 5,
    width: '73%',
  },
  titulo: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
  texto: {
    fontSize: 11,
    fontWeight: 'bold',
  },
});
