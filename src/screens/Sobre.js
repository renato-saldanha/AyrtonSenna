import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Capa from '../assets/foto-capa.jpg';

export default function Sobre() {
  return (
    <ScrollView>
      <View>
        <Text>Ayrton Senna</Text>
        <Image source={Capa} />
        <Text>
          No esporte mais global e veliz do mundo, um piloto é considerado o
          mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números
          ajudam a explicar porque o piloto ganhou status de mito do esporte.
          Mas Senna é mais do que isso: o brasileiro foi o responspavel por
          alguns dos momentos mais mágicos da principal categoria do
          automobilismo mundial
        </Text>
      </View>
      <View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
