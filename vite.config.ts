import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@import "./assets/global.scss";',
      },
    },
  },
})
