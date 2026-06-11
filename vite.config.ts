import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: "/jonathan-portfolio/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/scss/_variables.scss" as *;`,
      }
    }
  },
})
