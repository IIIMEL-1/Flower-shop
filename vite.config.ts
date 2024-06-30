import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@globalTypes": path.resolve(__dirname, "./src/types"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
  },
});
