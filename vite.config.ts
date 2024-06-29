import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@types": resolve(__dirname, "src/types"),
      "@config": resolve(__dirname, "src/config"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@redux": resolve(__dirname, "src/redux"),
      "@styles": resolve(__dirname, "src/styles"),
      "@utils": resolve(__dirname, "src/utils"),
      "@": resolve(__dirname, "src/"),
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
