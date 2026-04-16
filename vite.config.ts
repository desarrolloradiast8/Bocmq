import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Transformamos el export a una función que recibe { command }
export default defineConfig(({ command }) => {
  return {
    // Si ejecutas 'npm run build' usará /boc/
    // Si ejecutas 'npm run dev' usará /
    base: command === 'build' ? '/boc/' : '/',
    
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: [
        {
          // Esto busca cualquier cosa que empiece con figma:asset/ y termine en .png
          find: /^figma:asset\/.*\.png$/,
          // Y lo reemplaza TODO por la ruta de tu único archivo jpeg
          replacement: path.resolve(__dirname, './src/assets/placeholder.jpeg')
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        }
      ],
    },
  }
})