import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImagem}>
        <Image source={props.imagem} />
      </View>
      <View style={styles.containerTexto}>
        <Text>{props.titulo}</Text>
        <Text>{props.texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerImagem: {
    flex: 1,
  },
  containerTexto: {
    flex: 3,
  },
});
