// Formatea un valor numérico como una cadena de texto en formato de moneda (USD).
export const formatCurrency = (value: string | number): string =>
    ` $${parseFloat(value.toString()).toFixed(2)} `;
