import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';

import Fundo from '../assets/fundo.jpg';
import Capa from '../assets/foto-capa.jpg';

export default function Principal() {
  return (
    <ImageBackground style={styles.container} source={Fundo} blurRadius={3}>
      <Image style={styles.capa} source={Capa} />
      <View style={styles.containerTexto}>
        <Text style={styles.titulo}>Ayrton Senna</Text>
        <Text style={styles.texto}>
          Através desse APP, você vai conhecer um pouco sobre quem foi esse
          grande piloto.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  capa: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    width: 180,
    height: 180,
  },
  containerTexto: {
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 30,
    padding: 14,
  },
  titulo: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
});
