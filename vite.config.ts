import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss({ presets: [presetAttributify(), presetUno()] }), react()],
});
