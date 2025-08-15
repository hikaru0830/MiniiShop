import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoImport from 'unplugin-auto-import/vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

const srcDir = path.resolve(__dirname, './src');
const outputDir = path.resolve(__dirname, '../wwwroot/react');

// 遞迴抓取所有 jsx/tsx 檔案
function getJsxEntries(dir = srcDir) {
  const entries = {};
  function walk(currentDir) {
    fs.readdirSync(currentDir).forEach(file => {
      const fullPath = path.join(currentDir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (/\.(jsx|tsx)$/.test(file)) {
        // 保留相對於 src 的路徑結構
        const relativePath = path.relative(srcDir, fullPath);
        const nameWithoutExt = relativePath.replace(/\.[^/.]+$/, '');
        entries[nameWithoutExt] = fullPath;
      }
    });
  }
  walk(dir);
  return entries;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    autoImport({
      imports: {
        'react': [['default', 'React']],
        'react-dom/client': [['default', 'ReactDOM']],
        'lodash': [['default', '_']],
      },
      dts: false // 不生成 types 檔
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: outputDir,
    emptyOutDir: true,
    lib: {
      entry: getJsxEntries(),
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name][extname]',
        // 確保每個入口點都是獨立的 ES module
        // preserveModules: true,
        // preserveModulesRoot: srcDir
      },
    },
    target: 'esnext',
    minify: false, // 開發時可以設為 false 以便調試
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  resolve: {
    alias: {
      //路徑別名
      '@src': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  //base: '/lib/react/'
});