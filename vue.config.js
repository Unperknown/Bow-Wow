module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api/*': {
        target: "http://localhost:3000"
      }
    }
  },
  pwa: {
    name: '바우와우',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#FFFFFF',
      short_name: '바우와우'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
      importScripts: ['polyfill.js']
    }
  }
}
