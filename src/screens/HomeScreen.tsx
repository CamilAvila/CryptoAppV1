import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Usamos íconos de FontAwesome
import { fetchCryptos } from '../api/cryptoApi'; // Función para obtener los datos de las criptomonedas
import { Crypto } from '../models/Crypto'; // Modelo de la criptomoneda
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Navegación entre pantallas
import { RootStackParamList } from '../navigation'; // Rutas de navegación

// Definimos el tipo de las propiedades que recibimos en esta pantalla
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  // Estados para almacenar las criptomonedas, los resultados filtrados y el texto de búsqueda
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [filtered, setFiltered] = useState<Crypto[]>([]);
  const [search, setSearch] = useState('');

  // useEffect se usa para cargar las criptomonedas al inicio de la pantalla
  useEffect(() => {
    const loadCryptos = async () => {
      try {
        // Llamamos a la API para obtener las criptomonedas
        const data = await fetchCryptos();
        setCryptos(data); // Guardamos las criptomonedas en el estado
        setFiltered(data); // También guardamos los datos filtrados (al principio, no hay filtro)
      } catch (error) {
        console.error('Error fetching cryptos:', error); // En caso de error, lo mostramos en consola
      }
    };
    loadCryptos(); // Ejecutamos la función para cargar las criptomonedas
  }, []);

  // Función para filtrar las criptomonedas según el texto de búsqueda
  const handleSearch = (text: string) => {
    setSearch(text); // Actualizamos el texto de búsqueda
    const lower = text.toLowerCase(); // Convertimos el texto de búsqueda a minúsculas
    const filteredData = cryptos.filter(c =>
      c.name.toLowerCase().includes(lower) || c.symbol.toLowerCase().includes(lower) // Filtramos por nombre o símbolo
    );
    setFiltered(filteredData); // Actualizamos los resultados filtrados
  };

  // Función que renderiza cada elemento de la lista (una criptomoneda)
  const renderItem = ({ item }: { item: Crypto }) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('Details', { crypto: item })} // Navega a la pantalla de detalles al tocar
    >
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1f2937' }}>
          {item.name} <Text style={{ color: '#6b7280' }}>({item.symbol})</Text>
        </Text>
        <Text style={{ fontSize: 12, color: '#9ca3af' }}>
          Market Cap: ${parseFloat(item.marketCapUsd || '0').toFixed(0)} {/* Formateamos la capitalización */}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name="usd" size={18} color="#10b981" /> {/* Icono de dólar */}
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#10b981', marginLeft: 6 }}>
          ${parseFloat(item.priceUsd).toFixed(2)} {/* Mostramos el precio de la criptomoneda */}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f9fafb', paddingHorizontal: 20, paddingTop: 24 }}>
      {/* Título principal de la pantalla */}
      <Text style={{ fontSize: 24, fontWeight: '700', color: '#1e40af', marginBottom: 12 }}>
        🪙 CriptoApp
      </Text>

      {/* Campo de búsqueda */}
      <TextInput
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 14,
          fontSize: 16,
          borderColor: '#d1d5db',
          borderWidth: 1,
          marginBottom: 20,
        }}
        placeholder="🔍 Buscar por nombre o símbolo..." // Texto de ejemplo
        placeholderTextColor="#9ca3af" // Color del texto de ejemplo
        value={search} // Valor actual del texto de búsqueda
        onChangeText={handleSearch} // Cada vez que el texto cambie, lo manejamos con la función 'handleSearch'
      />

      {/* Lista de criptomonedas filtradas */}
      <FlatList
        data={filtered} // Usamos los datos filtrados
        keyExtractor={(item) => item.id} // Usamos el id como clave para cada elemento
        renderItem={renderItem} // Usamos la función renderItem para mostrar cada criptomoneda
        contentContainerStyle={{ paddingBottom: 32 }} // Agregamos un poco de espacio al final de la lista
      />
    </View>
  );
};

export default HomeScreen;
