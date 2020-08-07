const gulp = require('gulp')
const browserify = require('browserify')
const globby = require('globby')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const exorcist = require('exorcist')
const production = require('gulp-environments').production
const es = require('event-stream')
const envify = require('envify/custom')

const config = require('./../config')
const utils = require('./utils')

const onError = err => console.error('onError', err)

module.exports = function () {
  return function () {
    const admin = globby([`${config.directories.featureDirectory}**/admin-entry.js`,`${config.directories.projectDirectory}**/admin-entry.js`]).then((files) => {
      const tasks = files.map((entry) => {
        const destFile = config.bundle.jsAdminBundleName
        const entries = [entry]
        const themeName = utils.getThemeName(entry)
        const themeDir = `${config.directories.themeBuildDirectory}${config.currentWebsite}/${themeName}`

        return browserify({
          entries,
          ignore: '!**/*.spec.js',
          debug: true,
        })
          .transform(envify({ _: 'purge', NODE_ENV: production() ? 'production' : 'development' }), { global: true })
          .transform('babelify')
          .transform('browserify-shim')
          .transform('vueify')
          .bundle()
          .pipe(exorcist(`${themeDir}/${config.bundle.jsAdminMapName}`))
          .pipe(source(destFile))
          .pipe(production(buffer()))
          .pipe(production(uglify()))
          .pipe(gulp.dest(themeDir))
      })

      return es.merge.apply(null, tasks)
    }, onError)

    const plugins = globby([`${config.directories.featureDirectory}**/code/Scripts/Plugins`]).then((files) => {
      const tasks = files.map((entry) => {
        const themeName = utils.getThemeName(entry)

        return gulp
          .src([`${entry}/**/*`])
          .pipe(gulp.dest(`${config.directories.themeBuildDirectory}${config.currentWebsite}/${themeName}`))
      }, onError)

      return es.merge.apply(null, tasks)
    })

    return Promise.all([admin, plugins])
  }
}
