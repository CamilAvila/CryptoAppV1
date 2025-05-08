import AppNavigator from './src/navigation';  // Aquí estamos importando el enrutador principal de la app
import React from 'react';  // Necesitamos React para poder usar JSX en el componente

// Este es el componente principal de la app
export default function App() {
  return <AppNavigator />;  // Solo renderizamos el enrutador, que se encarga de la navegación
}
