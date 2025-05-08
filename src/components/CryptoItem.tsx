// Componente para mostrar información básica de una criptomoneda
// incluyendo su nombre, símbolo y precio en USD.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Crypto } from '../models/Crypto';

// Definimos las propiedades que el componente CryptoItem espera recibir
interface Props {
  crypto: Crypto; // Datos de la criptomoneda
  onPress: () => void; // Función a ejecutar cuando se presiona el componente
}

// Componente funcional para mostrar cada criptomoneda
const CryptoItem: React.FC<Props> = ({ crypto, onPress }) => (
  // El componente es presionable gracias a TouchableOpacity
  <TouchableOpacity style={styles.item} onPress={onPress}>
    {/* Nombre y símbolo de la criptomoneda */}
    <Text style={styles.name}>{crypto.name} ({crypto.symbol})</Text>
    {/* Precio formateado en dólares, con dos decimales */}
    <Text style={styles.price}>${parseFloat(crypto.priceUsd).toFixed(2)}</Text>
  </TouchableOpacity>
);

// Estilos del componente
const styles = StyleSheet.create({
  item: {
    paddingVertical: 12, // Espaciado vertical para separar cada elemento
    borderBottomWidth: 1, // Línea inferior para dividir las criptomonedas
    borderBottomColor: '#eee', // Color claro para la línea divisoria
  },
  name: {
    fontSize: 16, // Tamaño de letra para el nombre
    fontWeight: '600', // Peso de fuente para hacer el nombre más visible
  },
  price: {
    fontSize: 14, // Tamaño de letra para el precio
    color: '#444', // Color gris oscuro para diferenciarlo del nombre
  },
});

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
export default CryptoItem;
