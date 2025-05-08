import { Crypto } from '../models/Crypto';

// URL base para obtener la lista inicial de criptomonedas
const API_URL = 'https://api.coinlore.net/api/tickers/';

// Función para traer la lista completa de criptomonedas con detalles adicionales
export async function fetchCryptos(): Promise<Crypto[]> {
  // Realizamos la solicitud para obtener la lista básica de criptomonedas
  const response = await fetch(API_URL);
  const json = await response.json();

  // Usamos Promise.all para hacer solicitudes paralelas para obtener detalles adicionales de cada criptomoneda
  const cryptos = await Promise.all(
    json.data.map(async (item: any) => {
      // Para cada criptomoneda, hacemos una solicitud adicional usando su ID
      const detailsResponse = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${item.id}`
      );
      const detailsJson = await detailsResponse.json();

      // Convertimos los datos obtenidos en una instancia del modelo Crypto para mantener consistencia
      return Crypto.fromApi(detailsJson[0]);
    })
  );

  // Devolvemos el arreglo final con todas las criptomonedas y sus detalles
  return cryptos;
}
