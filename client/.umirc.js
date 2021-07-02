import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none'
    },
    fastRefresh: {},
    dva: {
        hmr: false
    },
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:6008',
    //         changeOrigin: true
    //     },
    //     '/uploads': {
    //         target: 'http://localhost:6008',
    //         changeOrigin: true
    //     }
    // },
    outputPath: '../server/dist'
});
