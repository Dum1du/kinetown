import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import removeConsole from "vite-plugin-remove-console";


// Load api.env manually
dotenv.config({ path: "./api.env" });

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    removeConsole({
      includes: ["log", "warn", "debug", "info"],
      exclude: ["error"],
    }),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            rubikDirt: ['"Rubik Dirt"', "cursive"],
          },
        },
      },
    }),
  ],
});
