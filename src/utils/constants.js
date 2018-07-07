module.exports = Object.freeze({
  maxModules: null,
  filterModules: null,
  endpoint: __dirname,
  configFilePath: 'using.config',
  specialChars: Object.freeze({
    requireAll: '*',
    injectNativeAssemblyScript: '$$',
    webpackRequirePlugin: '$',
    currentDirectory: '.'
  })
})