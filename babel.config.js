// Este archivo es una configuración de Babel para un proyecto con Expo

module.exports = function(api) {
    // Le decimos a Babel que guarde el caché para mejorar el rendimiento
    api.cache(true);

    return {
        // Usamos el preset de Babel recomendado para proyectos Expo
        presets: ['babel-preset-expo'],
    };
};
