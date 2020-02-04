export default {
  configurewebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/assets',
        'router': '@/assets',
        'store': '@/assets',
        'views': '@/assets',
      }
    }
  }
}