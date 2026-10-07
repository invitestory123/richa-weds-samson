import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
      },
    }),
    viteReact(),
    tailwindcss(),
    nitro(),
  ],
  server: {
    watch: {
      ignored: ["**/.output/**", "**/dist/**"],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});

