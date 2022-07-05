import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      // optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => {
            return `antd/es/${name}/style`;
            // return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: themeVariables,
      },
    },
  },
});
