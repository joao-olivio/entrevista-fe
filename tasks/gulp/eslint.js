const eslint = require('gulp-eslint')
const config = require('./../config')
const cache = require('gulp-cached')
const production = require('gulp-environments').production

module.exports = function (gulp) {
  return function () {
    return gulp.src([
      `${config.directories.projectDirectory}**/*.{js,vue}`,
      `${config.directories.featureDirectory}**/*.{js,vue}`,
      `${config.directories.foundationDirectory}**/*.{js,vue}`,
      `!${config.directories.projectDirectory}**/*.spec.js`,
      `!${config.directories.featureDirectory}**/*.spec.js`,
      `!${config.directories.featureDirectory}**/*.min.js`,
      `!${config.directories.foundationDirectory}**/*.spec.js`,
      '!node_modules/**'
    ])
    .pipe(cache('linting'))
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(production(eslint.failAfterError()))
  };
}
