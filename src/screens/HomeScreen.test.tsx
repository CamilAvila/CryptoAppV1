import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { fetchCryptos } from '../api/cryptoApi';
import { Crypto } from '../models/Crypto';

jest.mock('../api/cryptoApi');

const mockCryptos: Crypto[] = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', marketCapUsd: '600000000000', priceUsd: '30000', percentChange24h: '1.2', volume24: '1500000', csupply: '19000000', tsupply: '21000000', msupply: '21000000' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', marketCapUsd: '300000000000', priceUsd: '2000', percentChange24h: '2.5', volume24: '800000', csupply: '120000000', tsupply: '120000000', msupply: 'none' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', marketCapUsd: '10000000000', priceUsd: '0.5', percentChange24h: '-0.5', volume24: '500000', csupply: '35000000000', tsupply: '45000000000', msupply: '45000000000' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', marketCapUsd: '8000000000', priceUsd: '0.08', percentChange24h: '0.8', volume24: '300000', csupply: '132000000000', tsupply: 'none', msupply: 'none' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', marketCapUsd: '20000000000', priceUsd: '20', percentChange24h: '-1.0', volume24: '600000', csupply: '370000000', tsupply: 'none', msupply: 'none' }
];

(fetchCryptos as jest.Mock).mockResolvedValue(mockCryptos);

describe('HomeScreen', () => {
  it('should display the correct number of cryptos on load', async () => {
    const { getByText, getAllByText } = render(<HomeScreen navigation={{} as any} route={{} as any} />);
    await waitFor(() => expect(getByText('🪙 CriptoApp')).toBeTruthy());
    expect(getAllByText(/Market Cap:/).length).toBe(mockCryptos.length);
  });

  it('should show no results if the search does not match', async () => {
    const { getByPlaceholderText, queryByText } = render(<HomeScreen navigation={{} as any} route={{} as any} />);
    const searchInput = getByPlaceholderText('🔍 Buscar por nombre o símbolo...');
    fireEvent.changeText(searchInput, 'nonexistentcrypto');
    await waitFor(() => expect(queryByText(/Market Cap:/)).toBeNull());
  });
});
