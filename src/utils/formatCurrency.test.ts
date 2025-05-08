import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  // Test 1: Verifica que un número se formatee correctamente
  it('should format number correctly', () => {
    expect(formatCurrency(1234.567)).toBe(' $1234.57 '); // Resultado esperado con dos decimales
  });

  // Test 2: Verifica que una cadena de texto también se formatee correctamente
  it('should format string correctly', () => {
    expect(formatCurrency('9876.543')).toBe(' $9876.54 '); // Debe tratar el string como un número
  });

  // Test 3: Verifica que el cero se maneje correctamente
  it('should handle zero correctly', () => {
    expect(formatCurrency(0)).toBe(' $0.00 '); // Resultado esperado para el valor cero
  });
});
