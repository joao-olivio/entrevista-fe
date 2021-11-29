module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/entry.scss";'
      }
    }
  }
}
