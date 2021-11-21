import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"), // 根路徑
      "@": path.resolve(__dirname, "src"), // src 路徑
    },
  },
  define: {
    "process.env.NODE_ENV": {},
  },
});
