export default {
  configurewebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/assets',
        'network': '@/assets',
        'router': '@/assets',
        'store': '@/assets',
        'views': '@/assets',
      }
    }
  }
}