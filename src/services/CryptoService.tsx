// Importa el modelo Crypto desde el archivo que se encuentra en '../models/Crypto'.
// Este modelo define la estructura de la información de una criptomoneda en la aplicación.
import { Crypto } from '../models/Crypto';

// Importa la función fetchCryptos desde el archivo de la API que se encuentra en '../api/cryptoApi'.
// Esta función es responsable de hacer la solicitud a la API para obtener los datos de las criptomonedas.
import { fetchCryptos } from '../api/cryptoApi';

// Define la clase CryptoService, que será utilizada para interactuar con las criptomonedas.
// Es una forma de organizar las funciones que trabajan con criptos.
export class CryptoService {
  
  // Método estático `getCryptos` que retorna una lista de criptomonedas.
  // Se marca como `async` porque va a hacer una operación asíncrona (una solicitud a la API).
  static async getCryptos(): Promise<Crypto[]> {
    
    // Llama a la función `fetchCryptos` que trae los datos de las criptomonedas desde la API.
    // `await` se usa para esperar la respuesta de la API antes de continuar con la ejecución.
    const data = await fetchCryptos();
    
    // La función `map` recorre los datos obtenidos y aplica `Crypto.fromApi` a cada elemento de la lista.
    // `fromApi` es un método del modelo `Crypto` que convierte los datos crudos (como los que vienen de la API)
    // en objetos de tipo `Crypto` con la estructura que definimos en el modelo.
    return data.map(Crypto.fromApi);
  }
}
