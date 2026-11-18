import { defineConfig, loadEnv } from 'vite-plus';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'API_');
  const proxy = {
    '/api': `http://127.0.0.1:${env.API_PORT || '3001'}`,
  };

  return {
    server: { host: 'localhost', port: 5173, strictPort: true, proxy },
    preview: { host: 'localhost', proxy },
  };
});
