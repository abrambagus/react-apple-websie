import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "jsm-hlk",
      project: "javascript-react",
    }),
    sentryVitePlugin({
      org: "jsm-hlk",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
