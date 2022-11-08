import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Img1 from '../assets/vitoria1.jpg';
import Img2 from '../assets/vitoria2.jpg';
import Img3 from '../assets/vitoria3.jpg';

import Fundo from '../assets/corrida1.jpg';

export default function Vitorias() {
  return (
    <ImageBackground style={styles.container} source={Fundo} blurRadius={4}>
      <ScrollView>
        <View style={styles.containerNumeros}>
          <Text style={styles.titulo}>Senna em Numeros</Text>
          <Text style={styles.texto}>
            Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e
            ganhou 41 Grandes Prêmios e 65 pole positions
          </Text>
          <View style={styles.containerTrofeus}>
            <FontAwesome5 name="trophy" size={25} color="#ffff00" solid />
            <Text style={styles.numeros}>161</Text>
            <Text style={styles.numerosDescricao}>GPS DISPUTADOS</Text>
          </View>
          <View style={styles.containerTrofeus}>
            <FontAwesome5 name="trophy" size={25} color="#ffff00" solid />
            <Text style={styles.numeros}>65</Text>
            <Text style={styles.numerosDescricao}>POLE POSITIONS</Text>
          </View>
          <View style={styles.containerTrofeus}>
            <FontAwesome5 name="trophy" size={25} color="#ffff00" solid />
            <Text style={styles.numeros}>41</Text>
            <Text style={styles.numerosDescricao}>VITÓRIAS</Text>
          </View>
          <View style={styles.containerTrofeus}>
            <FontAwesome5 name="trophy" size={25} color="#ffff00" solid />
            <Text style={styles.numeros}>3X</Text>
            <Text style={styles.numerosDescricao}>CAMPEÃO MUNDIAL</Text>
          </View>
        </View>
        <View>
          <View style={styles.containerCampeonatos}>
            <View style={styles.containerTituloCampeonato}>
              <Text style={styles.tituloCampeonato}>
                Campeonato Mundial - 1988
              </Text>
            </View>
            <Image source={Img1} style={styles.imagemCampeonato} />
          </View>
          <View style={styles.containerCampeonatos}>
            <View style={styles.containerTituloCampeonato}>
              <Text style={styles.tituloCampeonato}>
                Campeonato Mundial - 1990
              </Text>
            </View>
            <Image source={Img2} style={styles.imagemCampeonato} />
          </View>
          <View style={styles.containerCampeonatos}>
            <View style={styles.containerTituloCampeonato}>
              <Text style={styles.tituloCampeonato}>
                Campeonato Mundial - 1991
              </Text>
            </View>
            <Image source={Img3} style={styles.imagemCampeonato} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerNumeros: {
    backgroundColor: 'black',
    opacity: 0.7,
    marginHorizontal: 27,
    marginVertical: 20,
    padding: 13,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    alignContent: 'center',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  containerTrofeus: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
    marginVertical: 4,
    alignItems: 'center',
  },
  numeros: {
    fontSize: 20,
    color: '#ffff00',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  numerosDescricao: {
    color: 'white',
    fontSize: 15.5,
  },
  containerCampeonatos: {
    marginHorizontal: 40,
    marginVertical: 20,
    alignItems: 'center',
  },
  containerTituloCampeonato: {
    backgroundColor: 'black',
    opacity: 0.6,
    width: '100%',
    alignItems: 'center',
  },
  tituloCampeonato: {
    padding: 15,
    color: 'white',
  },
  imagemCampeonato: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
});
