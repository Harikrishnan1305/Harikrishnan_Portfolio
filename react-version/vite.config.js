import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    __VITE_NEON_PURPLE__: JSON.stringify("#8e44ad"),
    __VITE_GLASS_MORPHISM__: JSON.stringify(
      "from-transparent bg-white bg-white/10 backdrop-filter blur-lg",
    ),
  },
});
