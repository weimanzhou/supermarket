module.exports = {
  // 一定是 cofigureWebpack 之前项目启动不起来,是因为这里大小
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
