module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  pwa: {
    name: '바우와우',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#FDF8F8',
      short_name: '바우와우'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
      importScripts: ['polyfill.js']
    }
  }
}
