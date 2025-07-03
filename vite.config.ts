import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // позволяет принимать внешние подключения
    port: 5173,
    allowedHosts: ['https://bykovvik.github.io/github-page-for-tg-change-book/'], // <-- добавь сюда твой локалтуннель
  },
})
