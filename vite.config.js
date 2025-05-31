import { defineConfig } from 'vite'
import dns from 'node:dns'



export default defineConfig({
  server: {
    open: '/docs/index.html',
  },
})