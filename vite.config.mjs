import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          // UI libraries and icons
          if (id.includes('lucide-react') || id.includes('@radix-ui') || id.includes('@headlessui')) return 'vendor-ui';

          // React core
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor-react';

          // Animation
          if (id.includes('framer-motion') || id.includes('@motion')) return 'vendor-framer-motion';

          // Charts and d3
          if (id.includes('recharts') || id.includes('d3') || id.includes('victory')) return 'vendor-charts';

          // State management and utilities
          if (id.includes('@reduxjs') || id.includes('redux') || id.includes('zustand')) return 'vendor-state';

          // HTTP, date, small util libraries
          if (id.includes('axios')) return 'vendor-axios';
          if (id.includes('date-fns') || id.includes('dayjs')) return 'vendor-date';

          // Large utility libraries
          if (id.includes('lodash') || id.includes('ramda') || id.includes('underscore')) return 'vendor-lodash';

          // Tailwind plugins / css utilities
          if (id.includes('tailwindcss') || id.includes('postcss')) return 'vendor-css';

          // Default vendor chunk
          return 'vendor';
        }
      }
    }
  },
  plugins: [tsconfigPaths(), react(), tagger(), visualizer({ filename: './build/stats.html', gzipSize: true })],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});