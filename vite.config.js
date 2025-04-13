import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";

// Load api.env manually
dotenv.config({ path: "./api.env" });

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
