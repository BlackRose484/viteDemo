import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/viteDemo/',   // 👈 thay hellovite bằng đúng tên repo của bạn
})
