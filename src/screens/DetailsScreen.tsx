import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { RootStackParamList } from '../navigation'; 
import { formatCurrency } from '../utils/formatCurrency'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { crypto } = route.params;

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f9fafb', paddingHorizontal: 20, paddingTop: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: '#1e40af', marginBottom: 16 }}>
        Detalles de {crypto.name} ({crypto.symbol})
      </Text>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Precio en USD:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <FontAwesome name="usd" size={18} color="#10b981" />
          <Text style={{ fontSize: 22, fontWeight: '600', color: '#10b981', marginLeft: 8 }}>
            {crypto.priceUsd ? formatCurrency(crypto.priceUsd) : 'No disponible'}
          </Text>
        </View>
      </View>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Cambio en 24h:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <FontAwesome
            name={parseFloat(crypto.percentChange24h) >= 0 ? 'arrow-up' : 'arrow-down'}
            size={18}
            color={parseFloat(crypto.percentChange24h) >= 0 ? '#10b981' : '#ef4444'}
          />
          <Text style={{ fontSize: 22, fontWeight: '600', color: parseFloat(crypto.percentChange24h) >= 0 ? '#10b981' : '#ef4444', marginLeft: 8 }}>
            {crypto.percentChange24h ? `${crypto.percentChange24h}%` : 'No disponible'}
          </Text>
        </View>
      </View>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Capitalización de mercado:</Text>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#3b82f6', marginTop: 8 }}>
          {crypto.marketCapUsd ? formatCurrency(crypto.marketCapUsd) : 'No disponible'}
        </Text>
      </View>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Volumen en 24h:</Text>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#3b82f6', marginTop: 8 }}>
          {crypto.volume24 ? formatCurrency(crypto.volume24) : 'No disponible'}
        </Text>
      </View>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Suministro circulante:</Text>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#1f2937', marginTop: 8 }}>
          {crypto.csupply ? `${crypto.csupply}` : 'No disponible'}
        </Text>
      </View>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Suministro total:</Text>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#1f2937', marginTop: 8 }}>
          {crypto.tsupply ? `${crypto.tsupply}` : 'No disponible'}
        </Text>
      </View>

      <View style={cardStyle}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>Suministro máximo:</Text>
        <Text style={{ fontSize: 22, fontWeight: '600', color: !crypto.msupply || crypto.msupply === 'null' || crypto.msupply === '0' ? '#ef4444' : '#1f2937', marginTop: 8 }}>
          {!crypto.msupply || crypto.msupply === 'null' || crypto.msupply === '0' ? 'Sin suministro' : `${crypto.msupply}`}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
