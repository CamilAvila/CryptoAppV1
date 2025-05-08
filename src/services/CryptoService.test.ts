import { CryptoService } from './CryptoService';
import { fetchCryptos } from '../api/cryptoApi';

jest.mock('../api/cryptoApi'); // Mock de la API

describe('CryptoService', () => {
  it('should fetch and map cryptos correctly', async () => {
    // Mock de la respuesta de la API
    const mockCryptos = [
      { id: '1', name: 'Bitcoin', symbol: 'BTC', priceUsd: '50000', marketCapUsd: '900000000' },
      { id: '2', name: 'Ethereum', symbol: 'ETH', priceUsd: '3000', marketCapUsd: '300000000' }
    ];
    
    // Simulando la respuesta de fetchCryptos
    (fetchCryptos as jest.Mock).mockResolvedValue(mockCryptos);

    const result = await CryptoService.getCryptos();

    // Verificamos que el resultado es correcto
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('Bitcoin');
    expect(result[1].symbol).toBe('ETH');
  });
});