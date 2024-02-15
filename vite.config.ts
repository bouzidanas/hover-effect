
import { resolve } from 'path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/hover-effect.ts'),
            name: 'hover-effect',
            fileName: (format) => `hover-effect.${format}.js`
        },
    },
    plugins: [dts()],
});