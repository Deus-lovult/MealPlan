import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true, // サーバーがリッスンするホストアドレスを指定
    port: 5173, // 開発サーバーが使用するポート番号
  },
});
