const production = require('gulp-environments').production;

const glob = require('glob');
const es = require('event-stream');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const sourcemaps = require('gulp-sourcemaps')
const modifyCssUrls = require('gulp-modify-css-urls');
const cssnano = require('cssnano');

const config = require('./../config');
const utils = require('./utils');

const timestamp = +new Date();

const getFileName = path => path.match(/([^/.]+)\.[^.]*$/i)[1] || '';

const generateBundleName = (entry, bundleBaseName) => {
  const suffix = getFileName(entry).match(/-(.*)/);

  if (!suffix) {
    return bundleBaseName;
  }

  return bundleBaseName.replace(/(\.[\w\d_-]+)$/i, `${suffix[0]}$1`);
};

module.exports = function(gulp) {
  return function() {
    return glob(
      `${config.directories.projectDirectory}**/entry*.scss`,
      (err, files) => {
        const tasks = files.map(entry => {
          const themeName = utils.getThemeName(entry);

          return (
            gulp
              .src([`${config.directories.featureDirectory}**/*.scss`, entry])
              // .pipe(sourcemaps.init())  Currently an error in the gulp-sourcemaps plugin... Enable once fixed
              .pipe(sass().on('error', sass.logError))
              .pipe(
                concat(generateBundleName(entry, config.bundle.cssBundleName))
              )
              .pipe(
                postcss([
                  autoprefixer({ browsers: config.autoPrefixerBrowsers }),
                  cssnano()
                ])
              )
              .pipe(
                production(
                  modifyCssUrls({
                    append: `?c=${timestamp}`
                  })
                )
              )
              .pipe(production(cleanCSS()))
              // .pipe(sourcemaps.write('./'))
              .pipe(
                gulp.dest(config.directories.themeBuildDirectory + themeName)
              )
          );
        });

        // create a merged stream
        return es.merge.apply(null, tasks);
      }
    );
  };
};
