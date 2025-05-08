// Configuración básica del sistema de navegación para la app.
// Aquí definimos las pantallas principales y cómo se conectan.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Crypto } from '../models/Crypto';

// Definimos los parámetros que cada pantalla espera recibir.
export type RootStackParamList = {
  Home: undefined; // La pantalla de inicio no necesita parámetros.
  Details: { crypto: Crypto }; // La pantalla de detalles recibe un objeto Crypto.
};

// Creamos el stack de navegación usando los parámetros definidos arriba.
const Stack = createNativeStackNavigator<RootStackParamList>();

// Definimos el componente principal de navegación.
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {/* Definimos la pantalla de inicio */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Definimos la pantalla de detalles, que mostrará información de cada criptomoneda */}
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

// Exportamos el componente para usarlo en otras partes de la aplicación.
export default AppNavigator;
