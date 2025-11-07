import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects.html'),
                blog: resolve(__dirname, 'blog.html'),
                resume: resolve(__dirname, 'resume.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
})
