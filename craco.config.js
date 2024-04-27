module.exports = {
  devServer: {
    proxy: {
      '/': 'http://localhost:8000',
    },
  },
  webpack: {
    configure: webpackConfig => {
      webpackConfig.output.publicPath = '	https://react-test-1311325751.cos.ap-nanjing.myqcloud.com'
      return webpackConfig
    },
  },
}
