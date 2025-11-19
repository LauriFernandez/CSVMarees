import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: ['src/csv-marees.js'],
            name: "csvMarees",
            fileName: (format, entryName) => `lib-${entryName}.js`,
        },
    },
})