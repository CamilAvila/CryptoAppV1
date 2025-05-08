module.exports = {
  preset: 'react-native', // Establece el preset de Jest para proyectos React Native, que incluye configuraciones y transformadores predeterminados.
  
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Añade extensiones adicionales a Jest después de que el entorno de prueba esté configurado. En este caso, extiende las expectativas de Jest con las utilidades de `jest-native` para pruebas en React Native.

  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|@react-navigation)/)', // Este patrón indica que Jest debe transformar archivos en los paquetes mencionados dentro de node_modules (es decir, estos paquetes no deben ser ignorados por Jest). Es común en proyectos React Native donde algunas bibliotecas necesitan ser transformadas.
  ],

  detectOpenHandles: true, // Permite a Jest detectar y advertir sobre manejadores de archivos o conexiones abiertas durante las pruebas, lo que puede ser útil para evitar errores en las pruebas asíncronas.
};
