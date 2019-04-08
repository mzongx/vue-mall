module.exports = {
  // 修改的配置
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        ws: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'common': '@/common',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
}
