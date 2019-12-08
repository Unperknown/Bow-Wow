module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  pwa: {
    name: 'Bow-Wow',
    short_name: 'Bow-Wow',
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
      importScripts: ['polyfill.js']
    }
  }
}
