import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@assets",
                replacement: fileURLToPath(
                    new URL("./src/assets", import.meta.url)
                ),
            },
        ],
    },
})
