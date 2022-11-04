import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Principal from './screens/Principal';
import Sobre from './screens/Sobre';
import Vitorias from './screens/Vitorias';

import Icon from 'react-native-vector-icons/FontAwesome5';

import DadosSobre from './Dados/Sobre';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Principal"
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              const icon = {
                Principal: 'home',
                Sobre: 'question',
                Vitorias: 'trophy',
              };
              return <Icon name={icon[route.name]} size={17} color={color} />;
            },
            headerTitle: route.name === 'Principal' ? 'Início' : route.name,
            headerStyle: {
              backgroundColor: '#fceb72',
            },
            tabBarActiveBackgroundColor: 'white',
            tabBarInactiveBackgroundColor: '#fceb72',
            tabBarActiveTintColor: '#d90000',
            tabBarInactiveTintColor: 'black',
          })}>
          <Tab.Screen name="Principal" component={Principal} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Vitorias" component={Vitorias} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
