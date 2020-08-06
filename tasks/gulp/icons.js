const glob = require('glob')
const es = require('event-stream')
const svgSprite = require('gulp-svg-sprite')
const imagemin = require('gulp-imagemin')

const config = require('./../config')

/**
 * Configuration options
 * create an SVG sprite that
 * has to be inlined in the project
 */
const svgSpriteConfig = {
  mode: {
    symbol: {
      dest: 'sprite/',
      sprite: 'sprite.svg',
    },
  },
}

module.exports = function (gulp) {
  return function () {
    /**
     * Find all icons directories
     */
    return glob(`${config.directories.projectDirectory}**/code/**/Icons`, (err, files) => {
      /**
       * Map all icon directories to tasks
       */
      const tasks = files.map((iconsDirectoryPath) => {
        /**
         * Create an SVG sprite from the svg files
         * and output the sprite in the images folder
         */
        return gulp.src(`${iconsDirectoryPath}/*.svg`)
          .pipe(imagemin([
            imagemin.svgo({ plugins: [
              { removeStyleElement: true },
              { removeTitle: true }]
            })
          ]))
          .pipe(svgSprite(svgSpriteConfig))
          .pipe(gulp.dest(`${iconsDirectoryPath}/../Images`))
      })

      // create a merged stream
      return es.merge.apply(null, tasks)
    })
  };
}
