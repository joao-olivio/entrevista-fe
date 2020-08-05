const a11y = require('gulp-a11y')
const config = require('./../config')

module.exports = function (gulp) {
  return function () {
    return gulp.src(`${config.directories.buildDirectory}/Fractal/components/preview/*-page.html`)
    .pipe(a11y({
      viewportSize: '800x600',
      delay: 2
    }))
    .pipe(a11y.reporter())
  }
}
