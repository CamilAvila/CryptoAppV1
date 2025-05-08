// Esta clase representa una criptomoneda con sus propiedades principales,
// como nombre, símbolo, precio y otros datos financieros.

export class Crypto {
  // Constructor para inicializar las propiedades de la criptomoneda
  constructor(
    public id: string, // Identificador único de la criptomoneda
    public name: string, // Nombre de la criptomoneda (e.g., Bitcoin)
    public symbol: string, // Símbolo de la criptomoneda (e.g., BTC)
    public priceUsd: string, // Precio actual en USD
    public percentChange24h: string, // Cambio porcentual en las últimas 24 horas
    public marketCapUsd: string, // Capitalización de mercado en USD
    public volume24: string, // Volumen de transacciones en las últimas 24 horas
    public csupply: string, // Oferta circulante
    public tsupply: string, // Oferta total
    public msupply: string // Oferta máxima (si está disponible)
  ) {}

  // Método estático para crear una instancia de Crypto a partir de los datos de la API
  static fromApi(data: any): Crypto {
    return new Crypto(
      data.id,
      data.name,
      data.symbol,
      data.price_usd,
      data.percent_change_24h,
      data.market_cap_usd,
      data.volume24,
      data.csupply,
      data.tsupply,
      data.msupply
    );
  }
}