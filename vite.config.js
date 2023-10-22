// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // El archivo 'index.html' es la página principal
      },
    },
  },
  // Otras opciones de configuración
});